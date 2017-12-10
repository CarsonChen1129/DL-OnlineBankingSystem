import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../models/transaction.model';

@Injectable()
export class ContactinfoService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  // the function to get contacts info
  getContactsInfo(owner: string): Observable<any> {
    const params = {owner: owner};
    return this.http.post("http://localhost:8000/transferfund/getContactsInfo", params);
  }
  // the function to handle external transfer
  externalTransfer(tInfo:Transaction): Observable<any> {
    const params = JSON.parse(JSON.stringify(tInfo));
    return this.http.post("http://localhost:8000/transferfund/externalTransfer", params);
  }

}
