import { BaseModel } from "src/app/shared/models/base-model";

export interface PromoCodeModel extends BaseModel {
    id: string,
    fullName?: string;
    status?: string;
    groupName?: string;
    userId?: string;
    score?: string;
    code: string;
    createdAt?: Date;
}