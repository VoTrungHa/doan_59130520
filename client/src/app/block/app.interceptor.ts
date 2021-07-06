import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
    //     return next.handle(request);
    // }
    const token = this.localStorage.retrieve('authenticationToken');
    const lang = localStorage.getItem('lang');

    if (!!token && !request.url.startsWith('https://www.irene.tools')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin':'*'
        },
      });
    }
    return next.handle(request);
  }
}
