import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AreaModel } from "src/app/pages/references/areas/models/areas.model";
import { Response } from "../../models/reponse";
import { env } from "src/environmens/environment";

@Injectable({
    providedIn: 'root'
})
export class AreasService {

    constructor(private http: HttpClient) { }

    getAll(params?: any): Observable<Response<AreaModel[]>> {
        return this.http.get<Response<AreaModel[]>>(env.references + `references/all-areas?pageIndex=${params?.pageIndex}&pageSize=${params?.pageSize}&sortBy=${params?.sortBy}&sortType=${params?.sortType}`)
    }
    getAllDir(): Observable<Response<AreaModel[]>> {
        return this.http.get<Response<AreaModel[]>>(env.references + `references/all-areas-dir`)
    }
    create(data: AreaModel) {
        return this.http.post<Response<AreaModel[]>>(env.references + 'references/areas', data)
    }
    update(data: AreaModel, id: string) {
        return this.http.put<Response<AreaModel[]>>(env.references + `references/areas/${id}`, data)
    }
    delete(id: number | string) {
        return this.http.delete(env.references + `references/areas/${id}`)
    }

} 