import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
          return true;
      }

      return this.oauthService.changeCodeForToken().map(
        data => {
          return data.access_token ? true : false;
        }
      ).catch(error => {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return Observable.of(false);
      });
    }
}
