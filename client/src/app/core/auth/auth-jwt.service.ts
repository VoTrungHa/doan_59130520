import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVER_AUTH_API_URL } from 'src/app/app.contants';
import { Login } from '../login/login.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthJwtService {
  constructor(
    private http: HttpClient,
    private $locationStorage: LocalStorageService,
    private sesstionStorage: SessionStorageService
  ) {}

  login(credentials: Login): Observable<any> {
    return this.http
      .post(SERVER_AUTH_API_URL + 'login', credentials, {
        observe: 'response',
      })
      .pipe(
        map((resp) => this.authenticateSuccess(resp, credentials.rememberMe))
      );
  }
  authenticateSuccess(response: any, rememberMe: boolean): void {
    const bearerToken = response.body.token;
    const id = response.body.id;
    if (bearerToken) {
      this.storeAuthenticationToken(bearerToken, id);
      return bearerToken;
    }
  }
  logout() {
    return new Observable((obser) => {
      //remove our servise
      this.$locationStorage.clear('authenticationtoken');
      this.$locationStorage.clear('uuid');
      this.sesstionStorage.clear();
      sessionStorage.clear();
      localStorage.clear();
      obser.complete();
    });
  }
  storeAuthenticationToken(jwt, uuid) {
    this.$locationStorage.store('authenticationtoken', jwt);
    this.$locationStorage.store('uuid', uuid);
  }
}
