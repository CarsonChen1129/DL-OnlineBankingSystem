import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import { CommonModule } from '@angular/common';
import { EqualValidator } from '../directives/equal-validator.directive';
import { ForbiddenValidatorDirective } from '../directives/forbidden-name.directive';
import {RegisterComponent} from "../pages/register/register.component";
import {WelcomePageComponent} from "../pages/welcome-page/welcome-page";
import {LoginComponent} from "../pages/login/login";
import {LoanManageComponent} from "../pages/loan-manage/loan-manage";
import {PaymentHistoryComponent} from "../pages/payment-history/payment-history";
import {AutoLoanApplyComponent} from "../pages/autoloanapply/autoloanapply";

import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule,
  MatDialogRef, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSnackBarRef, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {AccountpageComponent} from "../pages/account-page/account-page";
import {AuthenticationService} from "../providers/authentication.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { TfDashboardComponent } from './../pages/transfer-fund/tf-dashboard/tf-dashboard.component';
import { TfInternalTransferComponent } from './../pages/transfer-fund/tf-internal-transfer/tf-internal-transfer.component';
import { TfPayOthersComponent } from './../pages/transfer-fund/tf-pay-others/tf-pay-others.component';
import { TfCheckDepositComponent } from './../pages/transfer-fund/tf-check-deposit/tf-check-deposit.component';
import { ImageUploadModule } from "angular2-image-upload";
import {AccountinfoserviceService} from '../app/services/accountinfoservice.service';
import { TransactioninfoService } from '../app/services/transactioninfo.service';
import { ContactinfoService } from '../app/services/contactinfo.service';
import { displayShortLabelPipe } from '../app/models/transaction.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    LoginComponent,
    AutoLoanApplyComponent,
    AccountpageComponent,
    DashboardComponent,
    RegisterComponent,
    LoanManageComponent,
    EqualValidator,
    ForbiddenValidatorDirective,
    PaymentHistoryComponent,
    LoanManageComponent,
    ProfilePageComponent,
    TfDashboardComponent,
    TfInternalTransferComponent,
    TfPayOthersComponent,
    TfCheckDepositComponent,
    displayShortLabelPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [AuthenticationService, HttpClient, TransactioninfoService, ContactinfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
