import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {LoginComponent} from '../pages/login/login';
import {RegisterComponent} from '../pages/register/register';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
