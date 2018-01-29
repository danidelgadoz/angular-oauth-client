import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { OauthService } from '../services/oauth.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  oauthCode: any;
  oauthData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private oauthService: OauthService) {
      this.oauthData = oauthService.getData();
    }

  ngOnInit() {
    console.log('DashboardComponent..');

    this.activatedRoute.queryParams.subscribe(params => {
      this.oauthData.code = params['code'];

      if (this.oauthData.code) {
        this.testingOauth();
      }
    });
  }

  testingOauth() {
    this.oauthService.setData(this.oauthData);

    this.oauthService.changeCodeForToken()
    .subscribe(
      data => {
        console.log('changeCodeForToken response from DashboardComponent', data);
      },
      error => {
        console.error('changeCodeForToken response from DashboardComponent', error);
      }
    );
  }

  testingOauthJq(code) {
    this.oauthService.changeCodeForTokenJq();

    const d = {
      'oauth_url': '10.36.70.64:8087',
      'grant_type': 'authorization_code',
      'client_id': 'prime-front-end-key',
      'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003',
      'redirect_uri': 'http://10.36.71.183:4200/dashboard',
      'response_type': 'code',
      'code': code
    };
  }

}
