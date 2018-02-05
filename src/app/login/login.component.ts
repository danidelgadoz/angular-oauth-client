import { Component, OnInit } from '@angular/core';

import { OauthService } from '../services/oauth.service';
import { EndpointSecuredService } from '../services/endpoint-secured/endpoint-secured.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oauthData: any;
  oauthUrlLogin: string;

  constructor(
    private oauthService: OauthService,
    private endpointSecuredService: EndpointSecuredService
  ) {
    this.oauthData = oauthService.getData();
    this.oauthUrlLogin = `http://${this.oauthData.oauth_url}/oauth/authorize?client_id=${this.oauthData.client_id}&scope=&redirect_uri=${this.oauthData.redirect_uri}&response_type=${this.oauthData.response_type}`;
  }

  ngOnInit() {
  }

  oauth() {
    window.location.href = this.oauthUrlLogin;
  }

  requestEndpointSecured() {
    this.endpointSecuredService.call().subscribe(data => {
      console.log(data);
    });
  }

}
