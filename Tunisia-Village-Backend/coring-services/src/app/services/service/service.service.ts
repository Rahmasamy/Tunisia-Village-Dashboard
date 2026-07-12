import { NoUserFounderror } from "../../auth/error.js";
import { SystemRole } from "../../user/entity/enum.js";
import { findUserById } from "../../user/repo/user.repo.js";
import { CreateServiceDTO, UpdateServiceDTO } from "../dto/service.dto.js";
import type { Service } from "../entity/service.entity.js";
import { NotServiceProviderError } from "../error.js";
import { createService } from "../repo/service.repo.js";

export class ServiceService {
    async create(userId: bigint, data: CreateServiceDTO, tx?: any) : Promise<Service> {
        const user = await findUserById(userId, tx)
        if (!user) {
            throw NoUserFounderror
        }
        if(user.system_role !== SystemRole.SERVICE_PROVIDER) {
            throw NotServiceProviderError
        }
        // create service
        const createdService = await createService({
            name: data.name,
            userId: user.id,
            ...(data.description !== undefined ? { description: data.description } : {}),
        }, tx)
        return createdService;
    }
    async updateService(data: UpdateServiceDTO) {

    }
    async deleteService(id: number) {

    }
    async getService(id: number) {

    }
    async getServices() {

    }
}
export const serviceService = new ServiceService();
