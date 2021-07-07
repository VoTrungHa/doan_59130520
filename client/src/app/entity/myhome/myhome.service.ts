import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class MyhomeService {
  constructor(private http: HttpClient) {}

  loadAll(data): Observable<any> {
    //  console.log(data);
    return this.http.post(
      SERVER_AUTH_API_URL + `dethiCreateBy`,
      { data },
      { observe: 'response' }
    );
  }
  getAll(id, state): Observable<any> {
    return this.http.get(
      SERVER_AUTH_API_URL + `getalldethibyid/${id}/query?state=` + state,
      { observe: 'response' }
    );
  }

  getDeThiDetailById(id): Observable<any> {
    //  console.log(id);
    return this.http.get(SERVER_AUTH_API_URL + `dethi/getone/${id}`, {
      observe: 'response',
    });
  }

  getDeThiDetailByIdandPerformer(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `bailambyidandperformer`,
      { data },
      {
        observe: 'response',
      }
    );
  }
  getById(id): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `profile/${id}`, {
      observe: 'response',
    });
  }
  getBailamById(id): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `bailambyid/${id}`, {
      observe: 'response',
    });
  }

  createBaiLam(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `bailam/create`,
      { data },
      { observe: 'response' }
    );
  }
}
