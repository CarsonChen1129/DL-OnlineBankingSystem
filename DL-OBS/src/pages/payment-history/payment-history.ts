import {Component, OnInit} from '@angular/core';
import {LocalStorage} from "../../providers/localstorage.service";

@Component({
    selector:'payment-history',
    templateUrl:'payment-history.html',
    styleUrls: ['payment-history.scss']
})

export class PaymentHistoryComponent implements OnInit {

    user:any;
    constructor(private storage: LocalStorage){}

    ngOnInit():void {
      this.storage.getObjectObservable("user").subscribe((data)=>{
        console.log("User "+data);
        if(data){
          this.user = data;
        }
      }, (error)=>{
        console.log(error);
      });
    }
}
