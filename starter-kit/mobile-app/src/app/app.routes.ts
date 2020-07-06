import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SPOrderComponent } from './components/sp-order/sp-order.component';
import { ServiceProviderListComponent } from './components/service-provider-list/service-provider-list.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-detail/service-provider-detail.component';
import { ContributorComponent } from './components/contributor/contributor.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
},
{
    path: 'serviceProvider',
    component: ServiceProviderListComponent,
},
{
    path: 'serviceProviderDetail',
    component: ServiceProviderDetailsComponent,
},
{
    path: 'order',
    component: SPOrderComponent,
},
{
    path: 'contributor',
    component: ContributorComponent,
},
];
