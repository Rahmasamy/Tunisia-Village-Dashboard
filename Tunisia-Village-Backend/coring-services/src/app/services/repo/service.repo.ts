import { db } from "../../../common/db/index.js";
import { services } from "../../../common/db/schema/index.js";
import { eq } from "drizzle-orm";
import  { Service } from "../entity/service.entity.js";

const toServiceEntity = (raw: any) => {
    return new Service({
        id: raw.id,
        name: raw.name,
        description: raw.description,
        userId: raw.userId,
    });
}

export const createService = async (data: Partial<Service>, tx?: any) => {
    const client = tx || db;
    const raws =
    await client.insert(services)
    .values({
        name: data.name!,
        description: data.description!,
        userId: data.userId!,
        
    }).returning();
    return toServiceEntity({
        id: raws[0]?.id,
        name: raws[0]?.name,
        description: raws[0]?.description,
        userId: raws[0]?.userId,
    });
}

export const getServices = async () => {
    return await db.select().from(services);
}

export const getServiceById = async (id: bigint) => {
    return await db.select().from(services).where(eq(services.id, id));
}

export const updateService = async (id: bigint, data: Partial<Service>) => {
    return await db.update(services).set(data).where(eq(services.id, id));
}

export const deleteService = async (id: bigint) => {
    
    return await db.delete(services).where(eq(services.id, id));
}