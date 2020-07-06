import { Component, OnInit } from '@angular/core';
import {APIService} from '../../services/api-service' 
import { Router } from '@angular/router';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { DataService } from '@src/app/services/data-service';
import { LogInService } from '@src/app/services/login-service';

@Component({
  selector: 'app-service-provider-details',
  templateUrl: './service-provider-detail.component.html',
  styleUrls: ['./service-provider-detail.component.css'],
})
export class ServiceProviderDetailsComponent implements OnInit {

    addressOfSanization: string = "";
    mobileNo: number;
    data: any = {};
    error: boolean;
    errorText: string;
    success: boolean;

    onButtonTap(): void {
        console.log("Button was pressed");
    }

  constructor(private apiService: APIService, private router: Router, private dataService: DataService, private loginData: LogInService)  { }

  ngOnInit() {
    console.log(this.dataService.serviceProvider);
    let id = this.dataService.serviceProvider['_id'];
    this.apiService.getServiceProviderById(id).subscribe(data=>{
      console.log("Get ServiceProvider Details --------------->>>>>>>>>>");
      console.log(data);
      if(data.error){
        this.error = true;
        this.errorText = data.error;
      }else{
        this.error = false;
        this.data = data;
      }
    })
  }

  submit(){
    this.error = false;
    this.success = false;
    if(this.addressOfSanization && this.mobileNo){
      let data = {
        "userId": this.loginData.userDetail['_id'],
        "serviceProviderId": this.dataService.serviceProvider['_id'],
        "address": this.addressOfSanization,
        "mobileNumber": this.mobileNo
      }
    this.apiService.sanitizationService(data).subscribe(data=>{
      console.log("Submit Senitization request --------------->>>>>>>>>>");
        console.log(data);
      if(data.error){
        this.errorText = "Error while placing order";
        this.error = true;
      }else{
        this.addressOfSanization = '';
        this.mobileNo = null;
        this.success = true;
      }
    })
    }else{
      this.errorText = "Please fill all details";
      this.error = true;
    }    
  }
}
