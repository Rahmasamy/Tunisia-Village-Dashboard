import { db } from "../../../common/db/index.js";
import { users } from "../../../common/db/schema/index.js";
import { User } from "../entity/user.entity.js";
import { eq, and, or, isNull } from "drizzle-orm";
import { SystemRole } from "../entity/enum.js";

function toEntity(raw: any): User {
  return new User({
    id: raw.id,
    email: raw.email,
    phone: raw.phone,
    name: raw.name,
    password_hash: raw.password_hash,
    system_role: raw.system_role as SystemRole,
    created_at: raw.created_at,
    updated_at: raw.updated_at,
    deleted_at: raw.deleted_at,
    membership_number: raw.membership_number,
    certificate_pdf_url: raw.certificate_pdf_url,
    certificate_image_url: raw.certificate_image_url,
  });
}

export async function selectUserByEmail(email: string): Promise<User | undefined> {
  const [user] = await db
    .select()
    .from(users)
    .where(
      and(
        eq(users.email, email),
        isNull(users.deletedAt)
      )
    )
    .limit(1);
   
  if (!user) return undefined;
  return toEntity({
    id: user.id,
    email: user.email,
    phone: user.phone,
    name: user.name,
    password_hash: user.passwordHash,
    system_role: user.systemRole,
    created_at: user.createdAt,
    updated_at: user.updatedAt,
    deleted_at: user.deletedAt,
    membership_number: user.membershipNumber,
    certificate_pdf_url: user.certificatePdfUrl,
    certificate_image_url: user.certificateImageUrl,
  });
}

export async function findUserById(id: bigint, tx?: any): Promise<User | undefined> {
  const client = tx || db;
  const [user] = await client
    .select()
    .from(users)
    .where(
      and(
        eq(users.id, id),
        isNull(users.deletedAt)
      )
    )
    .limit(1);

  if (!user) return undefined;
  return toEntity({
    id: user.id,
    email: user.email,
    phone: user.phone,
    name: user.name,
    password_hash: user.passwordHash,
    system_role: user.systemRole,
    created_at: user.createdAt,
    updated_at: user.updatedAt,
    deleted_at: user.deletedAt,
    membership_number: user.membershipNumber,
    certificate_pdf_url: user.certificatePdfUrl,
    certificate_image_url: user.certificateImageUrl,
  });
}

export async function findIfUserExists(email: string, phone: string): Promise<boolean> {
  const records = await db
    .select({ id: users.id })
    .from(users)
    .where(
      and(
        isNull(users.deletedAt),
        or(
          eq(users.email, email),
          eq(users.phone, phone)
        )
      )
    )
    .limit(1);

  return records.length > 0;
}

export async function createUserIfNotExists(user: Partial<User>, tx?: any): Promise<User> {
  const client = tx || db;
  
  // Generate a membership number if one wasn't provided
  const membershipNumber = user.membership_number ?? ("ANAS-" + Math.floor(Math.random() * 10000).toString().padStart(4, '0'));

  const [createdUser] = await client
    .insert(users)
    .values({
      email: user.email!,
      phone: user.phone ?? null,
      name: user.name!,
      passwordHash: user.password_hash ?? null,
      systemRole: user.system_role!,
      membershipNumber: membershipNumber,
    })
    .returning();

  if (!createdUser) {
    throw new Error("Failed to create user");
  }

  return toEntity({
    id: createdUser.id,
    email: createdUser.email,
    phone: createdUser.phone,
    name: createdUser.name,
    password_hash: createdUser.passwordHash,
    system_role: createdUser.systemRole,
    created_at: createdUser.createdAt,
    updated_at: createdUser.updatedAt,
    deleted_at: createdUser.deletedAt,
    membership_number: createdUser.membershipNumber,
    certificate_pdf_url: createdUser.certificatePdfUrl,
    certificate_image_url: createdUser.certificateImageUrl,
  });
}

export async function updateUser(id: bigint, updates: { name?: string; phone?: string }): Promise<User> {
  const [updatedUser] = await db
    .update(users)
    .set({
      ...updates,
      updatedAt: new Date(),
    })
    .where(eq(users.id, id))
    .returning();

  if (!updatedUser) {
    throw new Error("Failed to update user");
  }
    
  return toEntity({
    id: updatedUser.id,
    email: updatedUser.email,
    phone: updatedUser.phone,
    name: updatedUser.name,
    password_hash: updatedUser.passwordHash,
    system_role: updatedUser.systemRole,
    created_at: updatedUser.createdAt,
    updated_at: updatedUser.updatedAt,
    deleted_at: updatedUser.deletedAt,
    membership_number: updatedUser.membershipNumber,
    certificate_pdf_url: updatedUser.certificatePdfUrl,
    certificate_image_url: updatedUser.certificateImageUrl,
  });
}

export async function updateUserCertificates(id: bigint, pdfUrl: string, imageUrl: string): Promise<void> {
  await db
    .update(users)
    .set({
      certificatePdfUrl: pdfUrl,
      certificateImageUrl: imageUrl,
      updatedAt: new Date(),
    })
    .where(eq(users.id, id));
}