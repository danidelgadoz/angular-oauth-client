import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EndpointSecuredService {
  private clientUrl = 'http://10.36.70.64:8080';

  constructor(private http: HttpClient) { }

  call(): Observable<any> {
    return this.http.get(`${this.clientUrl}/bars/1`)
      .map((res: any) => res.data);
  }

}
