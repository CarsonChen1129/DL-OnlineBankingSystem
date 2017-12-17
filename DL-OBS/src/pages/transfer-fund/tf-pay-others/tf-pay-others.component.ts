import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import {AccountinfoserviceService} from '../../../providers/accountinfoservice.service';
import {TransactioninfoService} from '../../../providers/transactioninfo.service';
import {ContactinfoService} from '../../../providers/contactinfo.service';
import {Subscription} from 'rxjs/Subscription';

import {AccountInfo} from '../../../app/models/accountinfo.model';
import {Transaction} from '../../../app/models/transaction.model';
import {Contact} from '../../../app/models/contact.model';

@Component({
  selector: 'app-tf-pay-others',
  templateUrl: './tf-pay-others.component.html',
  styleUrls: ['./tf-pay-others.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TfPayOthersComponent implements OnInit, OnDestroy {
  owner: string = 'senw@andrew.cmu.edu';
  accounts: AccountInfo[] = [];
  contacts: Contact[] = [];
  subscriptionAccountInfo: Subscription;
  subscriptionContactsInfo: Subscription;

  secondAcctNum: string = '';

  checkMatch(): boolean {
    if (this.secondAcctNum != '' && this.secondAcctNum != this.modelc.accountNumber) {
      return false;
    } else {
      return true;
    }
  }

  checkRNumber(): boolean {
    var regex = new RegExp('^[0-9]{16}$');
    return this.modelc.routingNumber == '' || regex.test(this.modelc.routingNumber);
  }

  checkANumber(): boolean {
    var regex = new RegExp('^[0-9]{16}$');
    return this.modelc.accountNumber == '' || regex.test(this.modelc.accountNumber);
  }

  successMessage: string = null;
  errorMessage: string = null;

  successMessageC: string = null;
  errorMessageC: string = null;

  model: Transaction = new Transaction('', '', '', this.owner, '', true, 0.00, '');
  modelc: Contact = new Contact('', '', '', this.owner, '', '', '');

  hide: boolean = false;

  debug: boolean = false;

  constructor(private accountInfoService: AccountinfoserviceService,
              private transactionInfoService: TransactioninfoService, private contactInfoService: ContactinfoService) {
  }

  ngOnInit() {
    this.getAllAccountInfos();
    this.getContactsData();
  }

  ngOnDestroy() {
    this.subscriptionAccountInfo.unsubscribe();
    this.subscriptionContactsInfo.unsubscribe();
  }

  // the function to do external transfer
  onSubmit() {
    if (this.model.fromAccountNumber != '' && this.model.toAccountNumber != '') {
      this.successMessage = null;
      this.errorMessage = null;
      console.log('Submit external transfer form!');
      this.transactionInfoService.externalTransfer(this.model).subscribe(
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
  }

  // the function to add contact
  onSubmitContact() {
    console.log('submit add contact form!');
    this.successMessageC = null;
    this.errorMessageC = null;
    this.contactInfoService.addContact(this.modelc).subscribe(
      data => {
        console.log(data);
        this.successMessageC = data['message'];
        // also add contact to the contact array
        this.contacts.push(this.modelc);
      },
      err => {
        console.log(err);
        console.log(err.status);
        console.log(err.error.message);
        this.errorMessageC = err.error.message;
      }
    );
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
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  get diagnostic2() {
    return JSON.stringify(this.modelc);
  }

  // the function to check input amount
  checkAmount(): boolean {
    if (this.model.amount == null || this.model.amount > 0) {
      return true;
    } else {
      return false;
    }
  }

}
