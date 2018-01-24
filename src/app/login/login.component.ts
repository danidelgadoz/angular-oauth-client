import { Component, OnInit } from '@angular/core';

import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oauthData: any;
  oauthUrlLogin: string;
  curlRequest: string;
  userAccount: Number;

  constructor(private oauthService: OauthService) {
    this.oauthData = oauthService.getData();
    this.userAccount = 4557886000000018;
  }

  ngOnInit() {
  }

  oauth() {
    this.oauthUrlLogin = `http://${this.oauthData.oauth_url}/oauth/authorize?client_id=${this.oauthData.client_id}&scope=&redirect_uri=${this.oauthData.redirect_uri}&response_type=${this.oauthData.response_type}`;

    const url = prompt('Going to OauthLogin:', `${this.oauthUrlLogin}`);
    if (url != null) {
        this.oauthData.url = url;
        this.oauthService.setData(this.oauthData);
        window.location.href = url;
    }
  }

}
