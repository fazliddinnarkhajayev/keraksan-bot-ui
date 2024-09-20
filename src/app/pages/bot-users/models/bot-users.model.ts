import { BaseModel } from "src/app/shared/models/base-model";

export interface BotUserModel extends BaseModel {
    id: string,
    fio?: string;
    username?: string;
    fullName?: string;
    login?: string;
    roleId?: string;
    dataAt?: string;
    lastDateAt?: string;
    phone?: string;
    password?: string;
    phoneNumber?: string;
    phoneNumbers?: any[];
    active?: boolean;
    blocked?: boolean;
    user: {id: number, lastLogin: Date, userType: string, role: any};
}