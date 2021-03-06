import {Component, OnInit, OnDestroy} from '@angular/core';
import {AccountinfoserviceService} from '../../providers/accountinfoservice.service';
import {Subscription} from 'rxjs/Subscription';

import {AccountInfo} from '../../app/models/accountinfo.model';
import {Transaction} from '../../app/models/transaction.model';
import {LocalStorage} from '../../providers/localstorage.service';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'page-account',
  templateUrl: 'account-page.html',
  styleUrls: ['account-page.scss']
})

export class AccountpageComponent implements OnInit, OnDestroy {
  user;
  owner: string = 'shuai@gmail.com';
  accountType: string = 'checking';

  checkingAccount: AccountInfo = null;
  savingAccount: AccountInfo = null;
  lendingAccount: AccountInfo = null;

  pendingTransactions: Transaction[] = [];
  pastTransactions: Transaction[] = [];
  subscriptionAccountInfo: Subscription;
  subscriptionTransaction: Subscription;

  constructor(private accountInfoService: AccountinfoserviceService, private storage: LocalStorage) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').modal({dismissible: false});
    });
    this.storage.getObjectObservable('user').subscribe((data) => {
      console.log('User ' + data);
      if (data != null) {
        this.user = data;
        this.owner = this.user.email;
        this.getThreeAccountInfos();
      } else {
        $(document).ready(function () {
          $('#modal-login').modal('open');
        });
      }
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.subscriptionAccountInfo.unsubscribe();
  }

  getThreeAccountInfos() {
    this.subscriptionAccountInfo = this.accountInfoService.getAccountInfo(this.owner, 'checking').subscribe(
      data => {
        console.log(data);
        this.checkingAccount = new AccountInfo(data.id, data.accountNumber,
          data.firstName, data.lastName, data.owner, data.balance, data.accountType, data.interestRate, data.routingNumber);
      }
    );
    this.subscriptionAccountInfo = this.accountInfoService.getAccountInfo(this.owner, 'saving').subscribe(
      data => {
        console.log(data);
        this.savingAccount = new AccountInfo(data.id, data.accountNumber,
          data.firstName, data.lastName, data.owner, data.balance, data.accountType, data.interestRate, data.routingNumber);
      }
    );
    this.subscriptionAccountInfo = this.accountInfoService.getAccountInfo(this.owner, 'lending').subscribe(
      data => {
        console.log(data);
        this.lendingAccount = new AccountInfo(data.id, data.accountNumber,
          data.firstName, data.lastName, data.owner, data.balance, data.accountType, data.interestRate, data.routingNumber);
      }
    );
  }

  // the function to get pending transactions
  getTransactionsHistory(fromAccountNumber: string): void {
    console.log(fromAccountNumber);
    // get pending transaction
    this.subscriptionTransaction = this.accountInfoService.getTransactionHistory(this.owner, fromAccountNumber, true).subscribe(
      data => {
        this.pendingTransactions = data;
        console.log(this.pendingTransactions);
      }
    );
    // get past transaction
    this.subscriptionTransaction = this.accountInfoService.getTransactionHistory(this.owner, fromAccountNumber, false).subscribe(
      data => {
        this.pastTransactions = data;
        console.log(this.pastTransactions);
      }
    );
  }

  // teest function
  test() {
    console.log('test function');
    this.pendingTransactions.splice(0, 1);
    console.log(this.pendingTransactions);
  }
}
