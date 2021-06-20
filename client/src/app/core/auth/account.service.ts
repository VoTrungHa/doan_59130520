import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
import {HttpClient}from '@angular/common/http';
import {LocalStorageService}from "ngx-webstorage";
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  get(): Observable<HttpResponse<any>> {
    let id = this.localStorage.retrieve('uuid');
    return this.http.get<any>(SERVER_AUTH_API_URL + `profile/${id}`, {
      observe: 'response',
    });
  }
}
