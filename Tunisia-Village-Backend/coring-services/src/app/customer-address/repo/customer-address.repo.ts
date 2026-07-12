import { db } from "../../../common/db/index.js";
import { customerAddresses } from "../../../common/db/schema/index.js";
import { CustomerAddress } from "../entity/customer-address.entity.js";
import { eq, and } from "drizzle-orm";

function toEntity(raw: any): CustomerAddress {
  return new CustomerAddress({
    id: raw.id,
    user_id: raw.user_id,
    label: raw.label,
    lat: raw.lat,
    lng: raw.lng,
    country: raw.country,
    is_default: raw.is_default,
    city: raw.city,
    street: raw.street,
    building: raw.building,
    apt_number: raw.apt_number,
    type: raw.type,
    created_at: raw.created_at,
  });
}

export async function findAddressesByUserId(userId: bigint): Promise<CustomerAddress[]> {
  const records = await db
    .select()
    .from(customerAddresses)
    .where(eq(customerAddresses.userId, userId))
    .orderBy(customerAddresses.id);

  return records.map((r) =>
    toEntity({
      id: r.id,
      user_id: r.userId,
      label: r.label,
      lat: r.lat,
      lng: r.lng,
      country: r.country,
      is_default: r.isDefault,
      city: r.city,
      street: r.street,
      building: r.building,
      apt_number: r.aptNumber,
      type: r.type,
      created_at: r.createdAt,
    })
  );
}

export async function findAddressByIdAndUserId(id: bigint, userId: bigint): Promise<CustomerAddress | undefined> {
  const [record] = await db
    .select()
    .from(customerAddresses)
    .where(
      and(
        eq(customerAddresses.id, id),
        eq(customerAddresses.userId, userId)
      )
    )
    .limit(1);

  if (!record) return undefined;
  return toEntity({
    id: record.id,
    user_id: record.userId,
    label: record.label,
    lat: record.lat,
    lng: record.lng,
    country: record.country,
    is_default: record.isDefault,
    city: record.city,
    street: record.street,
    building: record.building,
    apt_number: record.aptNumber,
    type: record.type,
    created_at: record.createdAt,
  });
}

export async function createAddress(address: {
  user_id: bigint;
  label?: string | null | undefined;
  lat: number;
  lng: number;
  country: string;
  is_default?: boolean | undefined;
  city: string;
  street: string;
  building?: string | null | undefined;
  apt_number?: string | null | undefined;
  type: 'home' | 'office' | 'public_place';
}): Promise<CustomerAddress> {
  const [createdRecord] = await db
    .insert(customerAddresses)
    .values({
      userId: address.user_id,
      label: address.label,
      lat: address.lat.toString(),
      lng: address.lng.toString(),
      country: address.country,
      isDefault: address.is_default,
      city: address.city,
      street: address.street,
      building: address.building,
      aptNumber: address.apt_number,
      type: address.type,
    })
    .returning();

  if (!createdRecord) {
    throw new Error("Failed to create customer address");
  }

  return toEntity({
    id: createdRecord.id,
    user_id: createdRecord.userId,
    label: createdRecord.label,
    lat: createdRecord.lat,
    lng: createdRecord.lng,
    country: createdRecord.country,
    is_default: createdRecord.isDefault,
    city: createdRecord.city,
    street: createdRecord.street,
    building: createdRecord.building,
    apt_number: createdRecord.aptNumber,
    type: createdRecord.type,
    created_at: createdRecord.createdAt,
  });
}

export async function updateAddress(
  id: bigint,
  userId: bigint,
  updates: {
    label?: string | null | undefined;
    lat?: number | undefined;
    lng?: number | undefined;
    country?: string | undefined;
    is_default?: boolean | undefined;
    city?: string | undefined;
    street?: string | undefined;
    building?: string | null | undefined;
    apt_number?: string | null | undefined;
    type?: 'home' | 'office' | 'public_place' | undefined;
  }
): Promise<CustomerAddress> {
  const drizzleUpdates: any = {};
  if (updates.label !== undefined) drizzleUpdates.label = updates.label;
  if (updates.lat !== undefined) drizzleUpdates.lat = updates.lat.toString();
  if (updates.lng !== undefined) drizzleUpdates.lng = updates.lng.toString();
  if (updates.country !== undefined) drizzleUpdates.country = updates.country;
  if (updates.is_default !== undefined) drizzleUpdates.isDefault = updates.is_default;
  if (updates.city !== undefined) drizzleUpdates.city = updates.city;
  if (updates.street !== undefined) drizzleUpdates.street = updates.street;
  if (updates.building !== undefined) drizzleUpdates.building = updates.building;
  if (updates.apt_number !== undefined) drizzleUpdates.aptNumber = updates.apt_number;
  if (updates.type !== undefined) drizzleUpdates.type = updates.type;

  const [updatedRecord] = await db
    .update(customerAddresses)
    .set(drizzleUpdates)
    .where(
      and(
        eq(customerAddresses.id, id),
        eq(customerAddresses.userId, userId)
      )
    )
    .returning();

  if (!updatedRecord) {
    throw new Error("Failed to update customer address");
  }

  return toEntity({
    id: updatedRecord.id,
    user_id: updatedRecord.userId,
    label: updatedRecord.label,
    lat: updatedRecord.lat,
    lng: updatedRecord.lng,
    country: updatedRecord.country,
    is_default: updatedRecord.isDefault,
    city: updatedRecord.city,
    street: updatedRecord.street,
    building: updatedRecord.building,
    apt_number: updatedRecord.aptNumber,
    type: updatedRecord.type,
    created_at: updatedRecord.createdAt,
  });
}

export async function deleteAddress(id: bigint, userId: bigint): Promise<void> {
  await db
    .delete(customerAddresses)
    .where(
      and(
        eq(customerAddresses.id, id),
        eq(customerAddresses.userId, userId)
      )
    );
}

export async function clearDefaultAddresses(userId: bigint): Promise<void> {
  await db
    .update(customerAddresses)
    .set({ isDefault: false })
    .where(eq(customerAddresses.userId, userId));
}
