import { Component, OnInit } from '@angular/core';

import { OauthService } from '../services/oauth.service';
import { EndpointSecuredService } from '../services/endpoint-secured/endpoint-secured.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  oauthData: any;

  constructor(
    private oauthService: OauthService,
    private endpointSecuredService: EndpointSecuredService
  ) {
      this.oauthData = oauthService.getData();
    }

  ngOnInit() {
    console.log('DashboardComponent..');
  }

  requestEndpointSecured() {
    this.endpointSecuredService.call().subscribe(data => {
      console.log(data);
    });
  }

}
