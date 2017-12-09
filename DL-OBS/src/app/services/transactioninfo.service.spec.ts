import { TestBed, inject } from '@angular/core/testing';

import { TransactioninfoService } from './transactioninfo.service';

describe('TransactioninfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactioninfoService]
    });
  });

  it('should be created', inject([TransactioninfoService], (service: TransactioninfoService) => {
    expect(service).toBeTruthy();
  }));
});
