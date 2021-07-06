import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  private userIdentity: any; // danh tính người dùng
  private userProfiles: any;
  private authenticated = false; // trangj thais chứng thực
  private authenticationState = new Subject<any>();
  constructor(private account: AccountService) {}
  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.userIdentity = undefined;
    }
    // check and see if we have retrieved the userIdentity data from the server.
    // if we have, reuse it by immediately resolving
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }
    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.account
      .get() // get information Account
      .toPromise()
      .then((response) => {
        // console.log(response.body);
        const account = response.body.data;
        if (account) {
          this.userIdentity = account;
          this.authenticated = true;
        } else {
          // khoong co token thi will return null
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity; // reutrn account of use did login
      })
      .catch((err) => {
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }
  getUserProfiles(force?: boolean): Observable<any> {
    return Observable.create((observer) => {
      if (force === true) {
        this.userProfiles = undefined;
      }
      // check and see if we have retrieved the userProfile data from the server.
      // if we have, reuse it by immediately resolving
      if (this.userProfiles) {
        observer.next(this.userProfiles);
        return;
      }
      this.identity().then((res) => {
        // retrieve the userProfile data from the server, update the identity object, and then resolve.
        // recheck
        if (this.userProfiles) {
          observer.next(this.userProfiles);
          return;
        } else {
          this.userProfiles = this.userIdentity;
          observer.next(this.userProfiles);
          return;
        }
      });
    });
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
    if (!this.authenticate) {
      // remove user profile when user logout with authenticate = false
      this.userProfiles = null;
    }
    console.log(
      this.authenticated +
        ' ' +
        this.userIdentity +
        ' '

    );
  }

  hasAnyAuthority(authorities: string[]): Promise<boolean> {
    return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
  }
  hasAnyAuthorityDirect(authorities: string[]): boolean {
    console.log(this.userIdentity.authorities + ' ' + authorities);
    if (
      !this.authenticated ||
      !this.userIdentity ||
      !this.userIdentity.authorities
    ) {
      return false;
    }
    for (let i = 0; i < authorities.length; i++) {
      if (this.userIdentity.authorities.includes(authorities[i])) {
        return true;
      }
      // custom for functions
      if (this.userIdentity.functions.includes(authorities[i])) {
        return true;
      }
    }
    return false;
  }
}
