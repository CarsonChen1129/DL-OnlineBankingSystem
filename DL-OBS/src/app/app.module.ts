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

// export const firebaseConfig = {
//   apiKey: "AIzaSyAjyp-JugtSvYWTiV1k8tGhJE4b7HXEYeg",
//   authDomain: "dl-onlinebankingsystem.firebaseapp.com",
//   databaseURL: "https://dl-onlinebankingsystem.firebaseio.com",
//   projectId: "dl-onlinebankingsystem",
//   storageBucket: "dl-onlinebankingsystem.appspot.com",
//   messagingSenderId: "774948489055"
// };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    LoginComponent,
    AccountpageComponent,
    DashboardComponent,
    RegisterComponent,
    LoanManageComponent,
    EqualValidator,
    ForbiddenValidatorDirective,
    PaymentHistoryComponent,
    LoanManageComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
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
  ],
  providers: [AuthenticationService, HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
