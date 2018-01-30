import { TestBed, inject } from '@angular/core/testing';

import { EndpointSecuredService } from './endpoint-secured.service';

describe('EndpointSecuredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndpointSecuredService]
    });
  });

  it('should be created', inject([EndpointSecuredService], (service: EndpointSecuredService) => {
    expect(service).toBeTruthy();
  }));
});
