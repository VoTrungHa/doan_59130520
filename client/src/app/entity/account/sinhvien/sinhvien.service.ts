import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class SinhvienService {
  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    return this.http.post(SERVER_AUTH_API_URL + `created/sinhvien`, data, {
      observe: 'response',
    });
  }
  getAll(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `thanhvien/sinhviens`, {
      observe: 'response',
    });
  }
  update(data, id) {
    return this.http.put(
      SERVER_AUTH_API_URL + `thanhvien/thaydoi/${id}`,
      { data },
      { observe: 'response' }
    );
  }
  getById(id): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `profile/${id}`, {
      observe: 'response',
    });
  }
  delete(id,data): Observable<any> {
    return this.http.post(SERVER_AUTH_API_URL + `delete/thanhvien/${id}`,{data}, {
      observe: 'response',
    });
  }
  loadAll(req): Observable<any> {
    return this.http.get(
      SERVER_AUTH_API_URL +
        `thanhvien/sinhvien/query?search=` +
        req.search +
        '&Class=' +
        req.Class +
        '&limit=' +
        req.limit +
        '&page=' +
        req.current_page +
        '&sort=' +
        req.sort +
        '&reverse=' +
        req.reverse,
      { observe: 'response' }
    );
  }

  loadAllGv(req):Observable<any>{
    return this.http.get(
      SERVER_AUTH_API_URL +
        `thanhvien/giaovien/query?search=` +
        req.search +
        '&Class=' +
        req.Class +
        '&limit=' +
        req.limit +
        '&page=' +
        req.current_page +
        '&sort=' +
        req.sort +
        '&reverse=' +
        req.reverse +
        '&authorities=' +
        req.authorities,
      { observe: 'response' }
    );
  }
}
