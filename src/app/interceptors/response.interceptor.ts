// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
// import {Observable} from 'rxjs/Rx';

// import { OauthService } from '../services/oauth.service';

// @Injectable()
// export class ResponseInterceptor implements HttpInterceptor {

//     constructor(private authenticationService: OauthService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const started = Date.now();
//         return next
//         .handle(req)
//         .do(event => {
//             if (event instanceof HttpResponse) {
//                 if(event.body.auth===false)
//                     this.authenticationService.logout();

//                 console.log(`Request for ${req.urlWithParams} took ${Date.now() - started} ms.`);
//             }
//         }).catch((error:any) =>  {
//             console.log('interceptor: Server error', error)
//             return Observable.throw(error || 'interceptor Server error') ;
//         });
//     }
// }
