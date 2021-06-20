import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { AuthJwtService } from '../auth/auth-jwt.service';
import { PrincipalService } from '../auth/principal.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authJwtService: AuthJwtService,
    private principal: PrincipalService
  ) {}

  login(credentials: Login, callback?: any) {
     this.logout();
    const cb = callback || function () {};
    return new Promise((resolve, reject) => {
      this.authJwtService.login(credentials).subscribe(
        (data) => {
          this.getUserProfiles().subscribe((profiles) => {
            console.log(profiles);
            if (profiles) {
              // sessionStorage.setItem('listProfiles', JSON.stringify(profiles));
              localStorage.setItem('listProfiles', JSON.stringify(profiles));
              resolve(data);
              return cb();
            } else {
              return this.handleError(reject, cb, 'Access denied');
            }
          });
        },
        (error) => this.handleError(reject, cb, error)
      );
    });
  }
  // this check the user with role not B2BCUST
  private getUserProfiles() {
    return this.principal.getUserProfiles(true);
  }
  private handleError(reject, cb, err) {
    // this.logout();
    reject(err);
    console.log(err);
    return cb(err);
  }

  logout() {
    this.authJwtService.logout().subscribe();
    this.principal.authenticate(null);

  }
}
