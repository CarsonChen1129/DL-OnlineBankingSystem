import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class AccountinfoserviceService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit():void {
  }
  getAccountInfo(owner:string, accountType:string): void {
    const params = {owner: owner, accountType: accountType};
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json',
       'Access-Control-Request-Method':'POST', 'Access-Control-Request-Headers':'Content-Type, Authorization', 'Access-Control-Allow-Origin':'http://localhost:8000'})};
    this.http.post("http://localhost:8000/transferfund/getAccountInfo", params).subscribe(
      data => {console.log(data);}
    );
  }
}
