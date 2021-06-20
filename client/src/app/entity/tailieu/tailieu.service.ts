import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TailieuService {
  constructor(private http: HttpClient) {}
  loadAllDethi(data):Observable<any>{
    return this.http.post(
      SERVER_AUTH_API_URL + `getbystatetrue`,
      { data },
      { observe: 'response' }
    );
  }
  loadDethibyclass(_id):Observable<any>{
    return this.http.post(SERVER_AUTH_API_URL + `getbyclass`,{_id},{observe:'response'});
  }
}
