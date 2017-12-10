import { Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import { AccountinfoserviceService } from '../../../app/services/accountinfoservice.service';
import { TransactioninfoService } from '../../../app/services/transactioninfo.service';
import { Subscription } from 'rxjs/Subscription';

import { AccountInfo } from '../../../app/models/accountinfo.model';
import { Transaction } from '../../../app/models/transaction.model';

@Component({
  selector: 'app-tf-check-deposit',
  templateUrl: './tf-check-deposit.component.html',
  styleUrls: ['./tf-check-deposit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TfCheckDepositComponent implements OnInit, OnDestroy {
  owner:string = 'senw@andrew.cmu.edu';
  checkNumber:string = '1234567812345678';
  date:string = '2017-12-25';
  accounts: AccountInfo[] = [];
  subscriptionAccountInfo: Subscription;

  model: Transaction = new Transaction('',this.checkNumber,'',this.owner,this.date,true,0.00,'');

  // only for validation purpose
  image1:Object = null;
  image2:Object = null;

  successMessage:string = null;
  errorMessage:string = null;

  // for debugging purpose 
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private accountInfoService: AccountinfoserviceService, private transactionInfoService: TransactioninfoService) { }

  ngOnInit() {
    this.getAllAccountInfos();
  }

  ngOnDestroy() {
    this.subscriptionAccountInfo.unsubscribe();
  }
  // the function to get all accounts information
  getAllAccountInfos() {
    this.subscriptionAccountInfo = this.accountInfoService.getAllAccounts(this.owner).subscribe(
      data => {
          console.log(data);
          this.accounts = data;
      }
    );
  }

  // the function to check input amount
  checkAmount():boolean {
    if (this.model.amount == null || this.model.amount > 0) {
      return true;
    } else {
      return false;
    }
  }
  // the function to check upload images
  checkImages():boolean {
    if (this.image1 != null && this.image2 != null) {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {
    console.log("submit the form");
    this.successMessage = null;
    this.transactionInfoService.checkDeposit(this.model).subscribe(
      data => {
        console.log(data);
        this.successMessage = data['message'];
      },
      err => {
        console.log(err);
        console.log(err.status);
        console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
  }

  onUploadFinished1($event) {
    console.log($event.file);
    this.image1 = $event.file;
  }
  onUploadFinished2($event) {
    console.log($event.file);
    this.image2 = $event.file;
  }

  onRemoved1($event) {
    console.log('remove front image');
    this.image1 = null;
  }
  onRemoved2($event) {
    console.log('remove back image');
    this.image2 = null;
  }

}
