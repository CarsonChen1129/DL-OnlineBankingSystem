import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

=======
>>>>>>> Enrollpages
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import {DashboardComponent} from '../pages/dashboard/dashboard';

export const firebaseConfig = {
  apiKey: 'AIzaSyAkv3jLcTIQ1APk1e0BFAW70e_ndHbWrbM',
  authDomain: 'fir-2bd19.firebaseapp.com',
  databaseURL: 'https://fir-2bd19.firebaseio.com',
  storageBucket: 'fir-2bd19.appspot.com',
  messagingSenderId: '932306096637'
};
=======
import { RegisteroneComponent } from './registerone/registerone.component';
import { RegistertwoComponent } from './registertwo/registertwo.component';
import { RegisterthreeComponent } from './registerthree/registerthree.component';
import { RegisterfourComponent } from './registerfour/registerfour.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { EqualValidator } from './registerone/equal-validator.directive'; 
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
>>>>>>> Enrollpages

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
=======
    RegisteroneComponent,
    RegistertwoComponent,
    RegisterthreeComponent,
    RegisterfourComponent,
    EqualValidator,
    ForbiddenValidatorDirective,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
     CommonModule,

>>>>>>> Enrollpages
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
