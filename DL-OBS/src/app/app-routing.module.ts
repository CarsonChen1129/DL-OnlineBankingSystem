import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {RegisterComponent} from "../pages/register/register.component";
import {AccountpageComponent} from "../pages/account-page/account-page";
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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
