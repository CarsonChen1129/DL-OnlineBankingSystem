import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../models/transaction.model';

@Injectable()
export class TransactioninfoService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  // the function to handle internal transfer
  internalTransfer(tInfo:Transaction): Observable<any> {
    const params = JSON.parse(JSON.stringify(tInfo));
    return this.http.post("http://localhost:8000/transferfund/internalTransfer", params);
  }
}
