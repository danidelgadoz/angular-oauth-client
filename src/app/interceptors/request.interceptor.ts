import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { OauthService } from '../services/oauth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oauth: OauthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = this.oauth.getApiToken();
    // Clone the request to add the new header.
    const authReq = authHeader ? req.clone({headers: req.headers.set('Authorization', authHeader)}) : req;
    console.log(authReq);
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
