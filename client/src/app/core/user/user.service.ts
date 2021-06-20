import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserProfileByResellerId(resellerId: number): Observable<any> {
    return this.http.get<any>(
      SERVER_AUTH_API_URL + 'api/profile/getbyuuid/' + resellerId,
      { observe: 'response' }
    );
  }
}
