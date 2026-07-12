import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateServiceDTO {
    @IsNotEmpty({ message: "Name is required" })
    @IsString({ message: "Name must be a string" })
    
    name!: string;
    @IsOptional()
    @IsString({ message: "Description must be a string" })
    description?: string;
    @IsOptional()
    @IsNumber()
    userId?: bigint;
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
    @IsDate()
    @IsOptional()
    deletedAt?: Date;

}

export class UpdateServiceDTO {
    @IsNotEmpty({ message: "Name is required" })
    @IsString()
    name!: string;
    @IsOptional()
    @IsString()
    description!: string;
    @IsOptional()
    @IsNumber()
    userId?: bigint;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;


    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
    @IsDate()
    @IsOptional()
    deletedAt?: Date;
}