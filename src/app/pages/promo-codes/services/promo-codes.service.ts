import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environmens/environment';
import { Observable } from 'rxjs';
import { PromoCodeModel } from '../models/promo-code.model';
import { ResponseContent } from 'src/app/shared/models/res-content.model';

@Injectable({
  providedIn: 'root'
})
export class PromoCodesService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<ResponseContent<PromoCodeModel[]>> {
    return this.http.get<ResponseContent<PromoCodeModel[]>>(env.apiUrl + `/references/all-promo-codes?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&totalPagesCount=${params.totalPagesCount}&sortBy=${params.sortBy}&sortType=${params.sortType}`);
  }

  create(data: PromoCodeModel) {
    return this.http.post(env.apiUrl + '/references/promo-code', data);
  }

  update(data: PromoCodeModel, id: string) {
    return this.http.put(env.apiUrl + '/references/promo-code/'+id, data);
  }

  delete(id: number | string) {
    return this.http.delete(env.apiUrl + `/references/promo-code/:${id}`);
  }
}