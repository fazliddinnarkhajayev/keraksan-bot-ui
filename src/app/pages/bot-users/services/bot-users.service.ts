import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environmens/environment';
import { Observable } from 'rxjs';
import { BotUserModel } from '../models/bot-users.model';
import { ResponseContent } from 'src/app/shared/models/res-content.model';

@Injectable({
  providedIn: 'root'
})
export class BotUsersService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<ResponseContent<BotUserModel[]>> {
    return this.http.get<ResponseContent<BotUserModel[]>>(env.apiUrl + `/all-bot-users?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&totalPagesCount=${params.totalPagesCount}&sortBy=${params.sortBy}&sortType=${params.sortType}`);
  }

  getAllByStaff() {
    return this.http.get(env.apiUrl + '/all-bot-users');
  }

  create(data: BotUserModel) {
    return this.http.post(env.apiUrl + '/bot-users', data);
  }

  update(data: BotUserModel, id: string) {
    return this.http.put(env.apiUrl + '/bot-users/'+id, data);
  }

  delete(id: number | string) {
    return this.http.delete(env.apiUrl + `/bot-users/:${id}`);
  }
}