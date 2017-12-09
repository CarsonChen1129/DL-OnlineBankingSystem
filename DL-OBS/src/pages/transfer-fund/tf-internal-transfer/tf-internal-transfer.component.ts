import { Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import {AccountinfoserviceService} from '../../../app/services/accountinfoservice.service';
import { Subscription } from 'rxjs/Subscription';

import { AccountInfo } from '../../../app/models/accountinfo.model';
import { Transaction } from '../../../app/models/transaction.model';

@Component({
  selector: 'app-tf-internal-transfer',
  templateUrl: './tf-internal-transfer.component.html',
  styleUrls: ['./tf-internal-transfer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TfInternalTransferComponent implements OnInit, OnDestroy {
  owner:string = 'senw@andrew.cmu.edu';
  accounts: AccountInfo[] = [];
  subscriptionAccountInfo: Subscription;

  model: Transaction = new Transaction('','','','','',true,0.00,'');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log("submit this form!");
  }

  checkSame():boolean {
    if (this.model.fromAccountNumber != '' && this.model.toAccountNumber != '' 
            && this.model.fromAccountNumber == this.model.toAccountNumber) {
      return true;
    } else {
      return false;
    }
  }
  // for debugging purpose 
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private accountInfoService: AccountinfoserviceService) { }

  ngOnInit() {
    this.getAllAccountInfos();
  }
  ngOnDestroy() {
    this.subscriptionAccountInfo.unsubscribe();
  }
  getAllAccountInfos() {
    this.subscriptionAccountInfo = this.accountInfoService.getAllAccounts(this.owner).subscribe(
      data => {
          console.log(data);
          this.accounts = data;
      }
    );
  }
}
