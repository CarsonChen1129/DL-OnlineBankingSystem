import {Component, OnInit} from '@angular/core';
import {AccountinfoserviceService} from '../../app/services/accountinfoservice.service';
import { AccountInfo } from '../../app/models/accountinfo.model';

@Component({
    selector:'page-account',
    templateUrl:'account-page.html',
    styleUrls: ['account-page.scss']
})

export class AccountpageComponent implements OnInit {
    owner:string = 'senw@andrew.cmu.edu';
    accountType:string = 'checking';
    constructor(private accountInfoService:AccountinfoserviceService ){}
    
    ngOnInit():void {
        this.accountInfoService.getAccountInfo(this.owner, this.accountType);
    }
}