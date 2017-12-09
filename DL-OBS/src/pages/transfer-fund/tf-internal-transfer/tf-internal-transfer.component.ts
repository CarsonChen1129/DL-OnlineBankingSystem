import { Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import { AccountinfoserviceService } from '../../../app/services/accountinfoservice.service';
import { TransactioninfoService } from '../../../app/services/transactioninfo.service';
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

  model: Transaction = new Transaction('','','',this.owner,'',true,0.00,'');
  submitted = false;

  successMessage:string = null;
  errorMessage:string = null;

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

  constructor(private accountInfoService: AccountinfoserviceService, private transactionInfoService: TransactioninfoService) { }

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

  onSubmit() {
    this.submitted = true;
    this.successMessage = null;
    this.errorMessage = null;
    console.log("submit this form!");
    this.transactionInfoService.internalTransfer(this.model).subscribe(
      // successful internal transfer
      data => {
        console.log(data);
        this.successMessage = data['message'];
      },
      // error in internal transfer
      err => {
        console.log(err);
        console.log(err.status);
        console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
  }
}
