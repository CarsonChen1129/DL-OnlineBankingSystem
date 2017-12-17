import {TestBed, inject} from '@angular/core/testing';

import {AccountinfoserviceService} from './accountinfoservice.service';

describe('AccountinfoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountinfoserviceService]
    });
  });

  it('should be created', inject([AccountinfoserviceService], (service: AccountinfoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
