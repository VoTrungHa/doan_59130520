import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginmodalService } from '../login/loginmodal.service';
import { PrincipalService } from './principal.service';
import { StateStorageService } from './state-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GuardAuthGuard implements CanActivate {
  constructor(
    private LoginModal: LoginmodalService,
    private router: Router,
    private principal: PrincipalService,
    private stateStorageService: StateStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const functions = route.data['functions'];
    // console.log("url"+ state.url);
    // console.log("func"+functions);
    return this.checkLogin(functions, state.url);
  }

  checkLogin(authorities: string[], url: string): Promise<boolean> {
    // console.log(authorities);
    return Promise.resolve(
      this.principal.identity().then((account) => {
        // console.log("account"+account)
        if (account) {
          // console.log(account);
          if (!authorities || authorities.length === 0) {
            alert(
              'Truy cập bị từ chối. Bạn có thể không có quyền thích hợp để truy cập chức năng ' +

                '. Vui lòng liên hệ với quản trị viên để thêm quyền.'
            );
            return false;
          }
          return this.principal
            .hasAnyAuthority(authorities)
            .then((response) => {
              if (response) {
                return true;
              }
              if (isDevMode()) {
                console.error(
                  'User has not any of required authorities: ',
                  authorities
                );
              }
               alert(
                 'Truy cập bị từ chối. Bạn có thể không có quyền thích hợp để truy cập chức năng ' +

                   '. Vui lòng liên hệ với quản trị viên để thêm quyền.'
               );
              return false;
            });
        }
        this.stateStorageService.storeUrl(url);
        // console.log("fadssdfa")
        this.router.navigate(['error']).then(() => {
          if (!account) {
            this.LoginModal.open();
          }
        });
        return false;
      })
    );
  }
}
