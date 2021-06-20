import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient}from '@angular/common/http';
import {SERVER_AUTH_API_URL, SERVER_QUESTION_API_URL} from '../../app.contants';
@Injectable({
  providedIn: 'root',
})
export class BaithiService {
  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    console.log(data);
    return this.http.post(SERVER_AUTH_API_URL + `dethi/create`, data, {
      observe: 'response',
    });
  }
  getAll(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `dethis`, {
      observe: 'response',
    });
  }

  delete(id,data): Observable<any> {
    return this.http.post(SERVER_AUTH_API_URL + `dethi/delete/${id}`,{data}, {
      observe: 'response',
    });
  }

  getByQuery(req): Observable<any> {
    return this.http.get(
      SERVER_AUTH_API_URL +
        `dethi/search?page=` +
        req.current_page +
        '&limit=' +
        req.limit +
        '&search=' +
        req.search +
        '&sort=' +
        req.sort +
        '&reverse=' +
        req.reverse +
        '&kyThi=' +
        req.kyThi +
        '&Class=' +
        req.Class,
      { observe: 'response' }
    );
  }
  update(data, id) {
    return this.http.put(
      SERVER_AUTH_API_URL + `dethi/thaydoi/${id}`,
      { data },
      { observe: 'response' }
    );
  }

  getByIdForDuyet( id) {
    return this.http.get(
      SERVER_AUTH_API_URL + `dethi/getDuyet/${id}`,
      { observe: 'response' }
    );
  }
  duyet(data, id) {
    console.log(data + " "+id);
    return this.http.post(
      SERVER_AUTH_API_URL + `dethi/pheduyet/${id}`,
      { data },
      { observe: 'response' }
    );
  }

  getOneById(id): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `dethi/getone/${id}`, {
      observe: 'response',
    });
  }
  upload(data): Observable<any> {
    // file txt
    return this.http.post(
      SERVER_QUESTION_API_URL + `uploadQuestion/dethi`,
      data,
      {
        reportProgress: true,
        observe: 'response',
      }
    );
  }
  uploadFileXml(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `uploadXmlQuestion/dethi`,
      data,
      {
        reportProgress: true,
        observe: 'response',
      }
    );
  }
}
