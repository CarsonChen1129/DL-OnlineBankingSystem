import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AccountInfo } from '../models/accountinfo.model';

@Injectable()
export class AccountinfoserviceService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit():void {
  }
  getAccountInfo(owner:string, accountType:string): Observable<any> {
    const params = {owner: owner, accountType: accountType};
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post("http://localhost:8000/transferfund/getAccountInfo", params);
  }
}
