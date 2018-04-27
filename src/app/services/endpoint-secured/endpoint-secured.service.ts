import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment'

@Injectable()
export class EndpointSecuredService {
  private clientUrl = environment.backend.host;

  constructor(private http: HttpClient) { }

  call(): Observable<any> {
    return this.http.get(`${this.clientUrl}/bars/1`)
      .map((res: any) => res);
  }

}
