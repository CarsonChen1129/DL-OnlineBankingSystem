import { TestBed, inject } from '@angular/core/testing';

import { ContactinfoService } from './contactinfo.service';

describe('ContactinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactinfoService]
    });
  });

  it('should be created', inject([ContactinfoService], (service: ContactinfoService) => {
    expect(service).toBeTruthy();
  }));
});
