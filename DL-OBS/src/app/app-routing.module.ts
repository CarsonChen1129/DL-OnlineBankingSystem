import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {LoginComponent} from '../pages/login/login';
import {RegisterComponent} from '../pages/register/register';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {AppComponent} from "./app.component";
import { RegisteroneComponent } from '../pages/register/registerone/registerone.component';
import { RegistertwoComponent } from '../pages/register/registertwo/registertwo.component';
import { RegisterthreeComponent } from '../pages/register/registerthree/registerthree.component';
import { RegisterfourComponent } from '../pages/register/registerfour/registerfour.component';


const routes: Routes = [
    {
        path:'',
        component: WelcomePageComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
  { path: 'one', component: RegisteroneComponent },
  { path: 'two', component: RegistertwoComponent },
  { path: 'three', component: RegisterthreeComponent },
  { path: 'four', component: RegisterfourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
