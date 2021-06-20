import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SERVER_AUTH_API_URL,
} from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class BangdiemService {
  constructor(private http:HttpClient) {}

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

  exportFileExcel(data):Observable<any>{
    return this.http.post(SERVER_AUTH_API_URL + 'bailam/fileExcel',{data},{observe:"response"});
  }

  exportFileXml(data):Observable<any>
  {
    return this.http.post(SERVER_AUTH_API_URL + 'ketquaxml',{data},{observe:"response"});
  }

}
