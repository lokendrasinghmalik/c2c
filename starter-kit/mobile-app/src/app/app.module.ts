import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './services/api-service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DataService } from './services/data-service';
import { SPOrderComponent } from './components/sp-order/sp-order.component';
import { ServiceProviderListComponent } from './components/service-provider-list/service-provider-list.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-detail/service-provider-detail.component';
import { LogInService } from './services/login-service';
import { ContributorComponent } from './components/contributor/contributor.component';
import { LoaderService } from './services/loader-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ServiceProviderListComponent,
    SPOrderComponent,
    ServiceProviderDetailsComponent,
    ContributorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIService, DataService, LogInService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
