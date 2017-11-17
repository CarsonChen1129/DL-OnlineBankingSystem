import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {RegisterComponent} from "../pages/register/register.component";


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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
