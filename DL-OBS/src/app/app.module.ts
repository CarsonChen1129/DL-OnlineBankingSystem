import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {RegisterComponent} from '../pages/register/register.component';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {AccountpageComponent} from '../pages/account-page/account-page';
import {LoanManageComponent} from '../pages/loan-manage/loan-manage';
import {PaymentHistoryComponent} from '../pages/payment-history/payment-history';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';
import {TfDashboardComponent} from '../pages/transfer-fund/tf-dashboard/tf-dashboard.component';
import {TfCheckDepositComponent} from '../pages/transfer-fund/tf-check-deposit/tf-check-deposit.component';
import {TfInternalTransferComponent} from '../pages/transfer-fund/tf-internal-transfer/tf-internal-transfer.component';
import {TfPayOthersComponent} from '../pages/transfer-fund/tf-pay-others/tf-pay-others.component';
import {AutoLoanApplyComponent} from '../pages/autoloanapply/autoloanapply';
import {CustomerServiceComponent} from '../pages/customer-services/customerServiceComponent';
import {displayShortLabelPipe} from './models/transaction.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ImageUploadModule} from 'angular2-image-upload';
import {AuthenticationService} from '../providers/authentication.service';
import {TransactioninfoService} from '../providers/transactioninfo.service';
import {ContactinfoService} from '../providers/contactinfo.service';
import {AccountinfoserviceService} from '../providers/accountinfoservice.service';
import {LocalStorage} from '../providers/localstorage.service';
import {MaterializeModule} from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    RegisterComponent,
    DashboardComponent,
    AccountpageComponent,
    LoanManageComponent,
    PaymentHistoryComponent,
    ProfilePageComponent,
    TfDashboardComponent,
    TfCheckDepositComponent,
    TfInternalTransferComponent,
    TfPayOthersComponent,
    AutoLoanApplyComponent,
    CustomerServiceComponent,
    displayShortLabelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ImageUploadModule.forRoot(),
    MaterializeModule
  ],
  providers: [AuthenticationService, HttpClient, TransactioninfoService, ContactinfoService, AccountinfoserviceService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
