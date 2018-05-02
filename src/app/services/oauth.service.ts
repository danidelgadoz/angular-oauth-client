import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class OauthService {
  private headers = new Headers({
    'Authorization': 'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM='
  });

  data: any;

  constructor(private http: Http, private router: Router) {
    this.data = environment.oauth;
    this.data.code = null;
    localStorage.setItem('oauthData', JSON.stringify(this.data));
  }

  changeCodeForToken(): Observable<any> {
    const d = {
      'oauth_url': this.data.oauth_url,
      'grant_type': this.data.grant_type,
      'client_id': this.data.client_id,
      'redirect_uri': this.data.redirect_uri,
      'code': this.data.code
    };

    const url = `http://${d.oauth_url}/oauth/token?grant_type=${d.grant_type}&client_id=${d.client_id}&redirect_uri=${d.redirect_uri}&code=${d.code}`;

    return this.http.post(url, {}, {headers: this.headers})
    .map((response: Response) => {
        const body = response.json();
        localStorage.setItem('oauthSession', JSON.stringify(body));
        return body;
    })
    .catch(e => {
      const body = e.json();
      return Observable.throw('Unauthorized');
    });
  }

  getApiToken() {
    return localStorage.oauthSession ? 'Bearer ' + JSON.parse(localStorage.oauthSession).access_token : '';
  }

  getData() {
    return this.data;
  }

  setData(data) {
    localStorage.setItem('oauthData', JSON.stringify(data));
  }

  logout() {
    localStorage.removeItem('oauthSession');
    this.router.navigate(['/login']);

    const logoutHeaders = new Headers({
      'Authorization': `Bearer ${this.getApiToken()}`
    });

    return this.http.get(`http://${this.data.oauth_url}/oauth/logout`, {headers: logoutHeaders})
    .map((response: Response) => response.json());
  }

}
