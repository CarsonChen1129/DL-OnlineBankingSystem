import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {RegisterComponent} from "../pages/register/register.component";
import {AccountpageComponent} from "../pages/account-page/account-page";
import {ProfilePageComponent} from "../pages/profile-page/profile-page.component";


const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'account',
        component: AccountpageComponent
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
