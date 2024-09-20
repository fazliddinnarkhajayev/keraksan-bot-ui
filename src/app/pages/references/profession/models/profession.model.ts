import { BaseModel } from "src/app/shared/models/base-model";

export interface ProfessionModel extends BaseModel {
    name: string;
    code: number;
}