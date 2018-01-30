import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { OauthService } from '../services/oauth.service';
import { EndpointSecuredService } from '../services/endpoint-secured/endpoint-secured.service';

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
    private oauthService: OauthService,
    private endpointSecuredService: EndpointSecuredService
  ) {
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

  requestEndpointSecured() {
    this.endpointSecuredService.call().subscribe(data => {
      console.log(data);
    });
  }

}
