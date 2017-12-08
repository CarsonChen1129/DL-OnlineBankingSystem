import {Component, OnInit, OnDestroy} from '@angular/core';
import {AccountinfoserviceService} from '../../app/services/accountinfoservice.service';
import { AccountInfo } from '../../app/models/accountinfo.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector:'page-account',
    templateUrl:'account-page.html',
    styleUrls: ['account-page.scss']
})

export class AccountpageComponent implements OnInit, OnDestroy {
    owner:string = 'senw@andrew.cmu.edu';
    // accountType:string = 'checking';

    checkingAccount: AccountInfo = null;
    savingAccount: AccountInfo = null;
    subscriptionAccountInfo: Subscription;
    constructor(private accountInfoService: AccountinfoserviceService ){}
    
    ngOnInit() {
        this.getThreeAccountInfos();
    }

    ngOnDestroy() {
        this.subscriptionAccountInfo.unsubscribe();
    }

    getThreeAccountInfos() {
        this.subscriptionAccountInfo = this.accountInfoService.getAccountInfo(this.owner, 'checking').subscribe(
            data => {
                console.log(data);
                this.checkingAccount =  new AccountInfo(data.id, data.accountNumber, 
                    data.firstName, data.lastName, data.owner, data.balance, data.accountType, data.interestRate, data.routingNumber);
            }
        );
    }
}