import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OauthService {
  private headers = new Headers({
    'Authorization': 'Basic cHJpbWUtZnJvbnQtZW5kLWtleTo0OWI2N2YyYy1jNjYyLTExZTctYTNiNi0wMjQyYWMxMjAwMDM='
  });

  data: any;
  windowLocation: any;

  constructor(private http: Http) {
    this.windowLocation = window.location;

    this.data = {
      'oauth_url': '10.36.70.64:8087',
      'client_id': 'prime-front-end-key',
      'scope': null,
      'redirect_uri': `${this.windowLocation.origin}/dashboard`,
      'response_type': 'code',
      'grant_type': 'authorization_code',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'code': null
    };

    localStorage.setItem('oauthData', JSON.stringify(this.data));
  }

  changeCodeForToken() {
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
    });
  }

  getData() {
    return this.data;
  }

  setData(data) {
    localStorage.setItem('oauthData', JSON.stringify(data));
  }

}
