import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './loader-service';

@Injectable()
export class APIService {
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) {}

  //Login API
  public login(userDetails) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/login";
    return this.http.post(url, userDetails).pipe(map((response: any) => {
      this.loaderService.showLoader = false;
      return response;
    }
   ));
  }

  //Sign Up API
  public signUp(userDetails) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/login/signup";
    return this.http.post(url, userDetails).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service Provider API
  public getServiceProvider(city) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/getAllServiceProvider/" + city;
    return this.http.get(url).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service Provider API
  public getServiceProviderById(id) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/getServiceProvider/" + id;
    return this.http.get(url).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service Provider API
  public contribute(data) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/contribute";
    return this.http.post(url, data).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service Provider API
  public contribution(data) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/contribution";
    return this.http.post(url, data).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Add service for user API
  public sanitizationService(data) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/addService";
    return this.http.post(url, data).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service Orders List API
  public getOrderList(data) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/serviceProvider/orders";
    return this.http.post(url, data).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }

  //Get Service for Orders API
  public getOrderService(data) {
    this.loaderService.showLoader = true;
    let url = "https://helpinghand1.eu-gb.mybluemix.net/api/serviceProvider/service";
    return this.http.post(url, data).pipe(map((response: any) => {
      this.loaderService.showLoader = false
      return response;
    }
   ));
  }
}
