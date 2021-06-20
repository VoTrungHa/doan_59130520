import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { SERVER_AUTH_API_URL, SERVER_QUESTION_API_URL } from 'src/app/app.contants';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}
  create(data): Observable<any> {
    return this.http.post(SERVER_QUESTION_API_URL + `tailieu/create`, data, {
      observe: 'response',
    });
  }
  loadAll(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `tailieu`, {
      observe: 'response',
    });
  }

  getDocsById(id):Observable<any>{
    console.log(id)
    return this.http.get(SERVER_AUTH_API_URL+`tailieu/${id}`,{observe:'response'})
  }

  update(data,id):Observable<any>{
    return this.http.put(SERVER_AUTH_API_URL + `update/tailieu/${id}`,{data},{observe:"response"});
  }
  delete(id):Observable<any>{
    return this.http.delete(
      SERVER_AUTH_API_URL + `delete/tailieu/${id}`,
      { observe: 'response' }
    );
  }

  getAll(req): Observable<any> {
    return this.http.get(
      SERVER_QUESTION_API_URL +
        `tailieu/query?page=` +
        req.current_page +
        '&limit=' +
        req.limit +
        '&search=' +
        req.search,
      {
        observe: 'response',
      }
    );
  }
}
