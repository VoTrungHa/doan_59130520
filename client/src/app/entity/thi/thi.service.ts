import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SERVER_AUTH_API_URL,
  SERVER_QUESTION_API_URL,
} from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class ThiService {
  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `bailam/create`,
      { data },
      { observe: 'response' }
    );
  }
  getById(id): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `bailambyid/${id}`, {
      observe: 'response',
    });
  }

  NopBai(data): Observable<any> {
    //  console.log(data);
    return this.http.post(
      SERVER_AUTH_API_URL + `bailam/update`,
      { data },
      { observe: 'response' }
    );
  }
  loadAll(req): Observable<any> {
    return this.http.get(
      SERVER_AUTH_API_URL +
        'bailam/search/query?page=' +
        req.current_page +
        '&limit=' +
        req.limit +
        '&idPerformer=' +
        req.idPerformer +
        '&sort=' +
        req.sort +
        '&reverse=' +
        req.reverse +
        '&kyThi=' +
        req.kyThi +
        '&search=' +
        req.search +
        '&createBy=' +
        req.createBy +
        '&Class=' +
        req.Class,
      { observe: 'response' }
    );
  }
  loadAllPerformer(id): Observable<any> {
    return this.http.get(
      SERVER_AUTH_API_URL + 'bailam/loadAll/' + id,

      { observe: 'response' }
    );
  }

  getDataToServer(data): Observable<any> {
    return this.http.post(
      SERVER_QUESTION_API_URL + `downloadFileXml/bailam`,
      data,
      {
        observe: 'response',
      }
    );
  }
}
