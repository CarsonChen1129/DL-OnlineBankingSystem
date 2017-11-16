import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisteroneComponent } from '../pages/register/registerone/registerone.component';
import { RegistertwoComponent } from '../pages/register/registertwo/registertwo.component';
import { RegisterthreeComponent } from '../pages/register/registerthree/registerthree.component';
import { RegisterfourComponent } from '../pages/register/registerfour/registerfour.component';

export const router: Routes = [
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: RegisteroneComponent },
    { path: 'two', component: RegistertwoComponent },
    { path: 'three', component: RegisterthreeComponent },
    { path: 'four', component: RegisterfourComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
