export class Service {
    id: bigint;
    name: string;
    description?: string;
    userId: bigint;
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.userId = data.userId;
    }
}