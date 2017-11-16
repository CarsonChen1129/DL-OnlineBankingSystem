import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisteroneComponent } from './registerone/registerone.component';
import { RegistertwoComponent } from './registertwo/registertwo.component';
import { RegisterthreeComponent } from './registerthree/registerthree.component';
import { RegisterfourComponent } from './registerfour/registerfour.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { EqualValidator } from './registerone/equal-validator.directive'; 
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
