import { validate, ValidationError } from "class-validator";
import { AppError } from "../error/AppError.js";
import { plainToInstance } from "class-transformer";

function getValidationErrors(errors: ValidationError[]): string[] {
    const messages: string[] = [];
    for (const error of errors) {
        if (error.constraints) {
            messages.push(...Object.values(error.constraints));
        }
        if (error.children && error.children.length > 0) {
            messages.push(...getValidationErrors(error.children));
        }
    }
    return messages;
}

export async function validateBody<T extends Object>(cls: new () => T, body: unknown): Promise<T> {

    const instance = plainToInstance(cls, body);
    const errors = await validate(instance,{
        whitelist : true
    });
    if(errors.length > 0) {
        const messages = getValidationErrors(errors);
        throw new AppError( messages.join(", \n "),400);
    }
    return instance;
}