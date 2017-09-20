import { TestBed, inject } from '@angular/core/testing';

import { RegLoginService } from './reg-login.service';

describe('RegLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegLoginService]
    });
  });

  it('should be created', inject([RegLoginService], (service: RegLoginService) => {
    expect(service).toBeTruthy();
  }));
});
