import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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

export const firebaseConfig = {
  apiKey: 'AIzaSyAkv3jLcTIQ1APk1e0BFAW70e_ndHbWrbM',
  authDomain: 'fir-2bd19.firebaseapp.com',
  databaseURL: 'https://fir-2bd19.firebaseio.com',
  storageBucket: 'fir-2bd19.appspot.com',
  messagingSenderId: '932306096637'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    EqualValidator,
    ForbiddenValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
