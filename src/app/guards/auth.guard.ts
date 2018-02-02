import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { debug } from 'util';

import { OauthService } from '../services/oauth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    oauthData: any;

    constructor(private router: Router, private oauthService: OauthService) {
      this.oauthData = oauthService.getData();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.oauthData.code = route.queryParams.code;
      this.oauthService.setData(this.oauthData);

      if (localStorage.getItem('oauthSession')) {
          // logged in so return true
          return true;
      }

      return this.oauthService.changeCodeForToken().map(
        data => {
          console.log('changeCodeForToken response from DashboardComponent', data);
          return true;
        },
        error => {
          console.error('changeCodeForToken response from DashboardComponent', error);
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
        }
      );


      // if (localStorage.getItem('oauthSession')) {
      //     // logged in so return true
      //     return true;
      // }

      // // not logged in so redirect to login page with the return url
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      // return false;
    }
}
