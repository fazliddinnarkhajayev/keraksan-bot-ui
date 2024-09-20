import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environmens/environment';
import { Observable } from 'rxjs';
import { AdminModel } from '../models/admin.model';
import { ResponseContent } from 'src/app/shared/models/res-content.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<ResponseContent<AdminModel[]>> {
    return this.http.get<ResponseContent<AdminModel[]>>(env.apiUrl + `/all-users?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&totalPagesCount=${params.totalPagesCount}&sortBy=${params.sortBy}&sortType=${params.sortType}`);
  }

  getAllByStaff() {
    return this.http.get(env.apiUrl + '/all-users');
  }

  create(data: AdminModel) {
    return this.http.post(env.apiUrl + '/users', data);
  }

  update(data: AdminModel, id: string) {
    return this.http.put(env.apiUrl + '/users/'+id, data);
  }

  delete(id: number | string) {
    return this.http.delete(env.apiUrl + `/users/:${id}`);
  }
}