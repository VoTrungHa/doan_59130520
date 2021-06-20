import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  //săp diễn ra
  loadAll(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `getbystatetrue`,
      { data },
      { observe: 'response' }
    );
  }
  //đã kết thúc
  loadAllfalse(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `getbystatefalse`,
      { data },
      { observe: 'response' }
    );
  }
}
