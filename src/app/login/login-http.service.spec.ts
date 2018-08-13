import { TestBed, inject } from '@angular/core/testing';

import { LoginHttpService } from './login-http.service';

describe('LoginHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginHttpService]
    });
  });

  it('should be created', inject([LoginHttpService], (service: LoginHttpService) => {
    expect(service).toBeTruthy();
  }));
});
