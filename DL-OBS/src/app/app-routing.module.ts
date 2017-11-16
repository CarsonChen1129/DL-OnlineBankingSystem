import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {LoginComponent} from '../pages/login/login';
import {RegisterComponent} from '../pages/register/register';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {AppComponent} from "./app.component";

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
