import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AccountinfoserviceService } from '../../../app/services/accountinfoservice.service';
import { TransactioninfoService } from '../../../app/services/transactioninfo.service';
import { ContactinfoService } from '../../../app/services/contactinfo.service';
import { Subscription } from 'rxjs/Subscription';

import { AccountInfo } from '../../../app/models/accountinfo.model';
import { Transaction } from '../../../app/models/transaction.model';
import { Contact } from '../../../app/models/contact.model';

@Component({
  selector: 'app-tf-pay-others',
  templateUrl: './tf-pay-others.component.html',
  styleUrls: ['./tf-pay-others.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TfPayOthersComponent implements OnInit, OnDestroy {
  owner:string = 'senw@andrew.cmu.edu';
  accounts: AccountInfo[] = [];
  contacts: Contact[] = [];
  subscriptionAccountInfo: Subscription;
  subscriptionContactsInfo: Subscription;

  successMessage:string = null;
  errorMessage:string = null;

  model: Transaction = new Transaction('','','',this.owner,'',true,0.00,'');
  submitted = false;

  hide:boolean = false;
  constructor(private accountInfoService: AccountinfoserviceService, 
      private transactionInfoService: TransactioninfoService, private contactInfoService: ContactinfoService) { }

  ngOnInit() {
    this.getAllAccountInfos();
    this.getContactsData();
  }

  ngOnDestroy() {
    this.subscriptionAccountInfo.unsubscribe;
    this.subscriptionContactsInfo.unsubscribe;
  }

  onSubmit() {
    this.submitted = true;
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

  getContactsData() {
    this.subscriptionContactsInfo = this.contactInfoService.getContactsInfo(this.owner).subscribe(
      data => {
        console.log(data);
        this.contacts = data;
      }
    );
  }

  hideform() {
    if (this.hide) {
      this.hide = false;
      
    } else {
      this.hide = true;
    }
  }

  // for debugging purpose 
  get diagnostic() { return JSON.stringify(this.model); }

  // the function to check input amount
  checkAmount():boolean {
    if (this.model.amount == null || this.model.amount > 0) {
      return true;
    } else {
      return false;
    }
  }

}
