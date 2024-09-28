import { BaseModel } from "src/app/shared/models/base-model";

export interface BotUserModel extends BaseModel {
    id: string,
    fio?: string;
    username?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
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
    chatId: number;
    birthdayDate: Date;
    sex?: string;
    status?: string;
    professionName?: string;
    areaName?: string;
    professionId?: string;
    areaId?: string;
    user: {id: number, lastLogin: Date, userType: string, role: any};
}