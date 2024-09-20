import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProfessionModel } from "src/app/pages/references/profession/models/profession.model";
import { Response } from "../../models/reponse";
import { env } from "src/environmens/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfessionService {

    constructor(private http: HttpClient) { }

    getAll(params?: any): Observable<Response<ProfessionModel[]>> {
        return this.http.get<Response<ProfessionModel[]>>(env.references + `references/all-professions?pageIndex=${params?.pageIndex}&pageSize=${params?.pageSize}&sortBy=${params?.sortBy}&sortType=${params?.sortType}`)
    }
    create(data: ProfessionModel) {
        return this.http.post<Response<ProfessionModel[]>>(env.references + 'references/professions', data)
    }
    update(data: ProfessionModel, id: string) {
        return this.http.put<Response<ProfessionModel[]>>(env.references + `references/professions/${id}`, data)
    }
    delete(id: number | string) {
        return this.http.delete(env.references + `references/professions/${id}`)
    }

} 