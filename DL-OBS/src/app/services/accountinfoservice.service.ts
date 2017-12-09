import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountinfoserviceService implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit():void {
  }
  getAccountInfo(owner:string, accountType:string): Observable<any> {
    const params = {owner: owner, accountType: accountType};
    return this.http.post("http://localhost:8000/transferfund/getAccountInfo", params);
  }
  getAllAccounts(owner:string):Observable<any> {
    const params = {owner: owner};
    return this.http.post("http://localhost:8000/transferfund/getAllAccounts", params);
  }
  getTransactionHistory(owner:string, fromAccountNumber:string, pending: boolean): Observable<any> {
    const params = {owner: owner, fromAccountNumber: fromAccountNumber, pending: pending};
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post("http://localhost:8000/transferfund/getTransactionHistory", params);
  }
}
