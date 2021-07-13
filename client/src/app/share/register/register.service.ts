import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `register`,
      { data },
      { observe: 'response' }
    );
  }
  registerAdmin(): Observable<any> {
    const data = {
      authorities: 'ADMIN',
      username: 'admin@gmail.com',
      password: 'admin123',
    };
    return this.http.post(
      SERVER_AUTH_API_URL + `register`,
      { data },
      { observe: 'response' }
    );
  }
}
