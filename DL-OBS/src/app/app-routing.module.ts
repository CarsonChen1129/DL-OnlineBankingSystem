import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {LoginComponent} from '../pages/login/login';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {RegisterComponent} from "../pages/register/register.component";
import {AccountpageComponent} from "../pages/account-page/account-page";
<<<<<<< HEAD
import {LoanManageComponent} from "../pages/loan-manage/loan-manage";
import {PaymentHistoryComponent} from "../pages/payment-history/payment-history";
import {ProfilePageComponent} from "../pages/profile-page/profile-page.component";
=======
import {AutoLoanApplyComponent} from "../pages/autoloanapply/autoloanapply";
>>>>>>> origin/AutoLoanApply

const routes: Routes = [
    {
        path: '',
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
    {
        path: 'account',
        component: AccountpageComponent
    },
    {
<<<<<<< HEAD
        path: 'loanmanage',
        component: LoanManageComponent
    },
    {
        path: 'paymenthistory',
        component: PaymentHistoryComponent
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    }
=======
        path: 'autoloanapply',
        component: AutoLoanApplyComponent
    },

>>>>>>> origin/AutoLoanApply
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
