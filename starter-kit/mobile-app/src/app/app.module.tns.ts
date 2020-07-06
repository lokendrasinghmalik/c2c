import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { APIService } from './services/api-service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data-service';
import { SPOrderComponent } from './components/sp-order/sp-order.component';
import { ServiceProviderListComponent } from './components/service-provider-list/service-provider-list.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-detail/service-provider-detail.component';
import { LogInService } from './services/login-service';
import { ContributorComponent } from './components/contributor/contributor.component';
import { LoaderService } from './services/loader-service';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ServiceProviderListComponent,
    SPOrderComponent,
    ServiceProviderDetailsComponent,
    ContributorComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    NativeScriptFormsModule,
    TNSCheckBoxModule
  ],
  providers: [APIService, DataService, LogInService, LoaderService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
