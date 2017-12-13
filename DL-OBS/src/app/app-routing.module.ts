import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {LoginComponent} from '../pages/login/login';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {RegisterComponent} from "../pages/register/register.component";
import {AccountpageComponent} from "../pages/account-page/account-page";
import {LoanManageComponent} from "../pages/loan-manage/loan-manage";
import {PaymentHistoryComponent} from "../pages/payment-history/payment-history";
import {ProfilePageComponent} from "../pages/profile-page/profile-page.component";
import {AutoLoanApplyComponent} from "../pages/autoloanapply/autoloanapply";
import {TfDashboardComponent} from '../pages/transfer-fund/tf-dashboard/tf-dashboard.component';
import {TfInternalTransferComponent} from '../pages/transfer-fund/tf-internal-transfer/tf-internal-transfer.component';
import {TfCheckDepositComponent} from '../pages/transfer-fund/tf-check-deposit/tf-check-deposit.component';
import {TfPayOthersComponent} from '../pages/transfer-fund/tf-pay-others/tf-pay-others.component';

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
   {
        path: 'transfer-fund/dashboard',
        component: TfDashboardComponent
    },
    {
        path: 'transfer-fund/internal-transfer',
        component: TfInternalTransferComponent
    },
    {
        path: 'transfer-fund/check-deposit',
        component: TfCheckDepositComponent
    },
    {
        path: 'transfer-fund/pay-others',
        component: TfPayOthersComponent
    },
    {
        path: 'autoloanapply',
        component: AutoLoanApplyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
