import { Component, OnInit } from '@angular/core';

import { EndpointSecuredService } from '../services/endpoint-secured/endpoint-secured.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private endpointSecuredService: EndpointSecuredService) { }

  ngOnInit() {
    console.log('DashboardComponent..');
  }

  requestEndpointSecured() {
    this.endpointSecuredService.call().subscribe(data => {
      console.log(data);
    });
  }

}
