import { Component, OnInit } from '@angular/core';
import {APIService} from '../../services/api-service' 
import { Router } from '@angular/router';
import { CheckBox } from '@nstudio/nativescript-checkbox';
import { LogInService } from '@src/app/services/login-service';

@Component({
  selector: 'app-sp-order',
  templateUrl: './sp-order.component.html',
  styleUrls: ['./sp-order.component.css'],
})
export class SPOrderComponent implements OnInit {
  title = 'Service Provider';
  error: boolean; 
  success: boolean;
  spData = [];
  noOrder: boolean;
  orderDetails: any;
  chemical: boolean;
  nonChemical: boolean;
  spRate: number;
  errorText: string;

  constructor(private apiService: APIService, private router: Router, public loginData: LogInService)  { }

  ngOnInit() {
    this.getServiceOrder();
  }

  getServiceOrder(){
    this.apiService.getOrderList({"serviceProviderId": this.loginData.userDetail['_id']}).subscribe(data=>{
      console.log("Get Order --------------->>>>>>>>>>");
      console.log(data);
      if(data.error){
        this.noOrder = true;
      }else{
        this.noOrder = false;
        this.orderDetails = data;
      }
    })
  }

  submit(){
    this.errorText ="";
    this.error = false;
    this.success = false;
    if(this.spRate){      
      let data = {
        "userId" : this.loginData.userDetail['_id'],
        "rate" : this.spRate,
        "chemical" : this.chemical || false,
        "nonChemical" :this.nonChemical || false
      }
      this.apiService.getOrderService(data).subscribe(data=>{
        console.log("Submit Order --------------->>>>>>>>>>");
        console.log(data);
        if(data.error){
          this.errorText = data.error;
          this.error = true;          
        }else{
          this.spRate = null;
          this.chemical = false;
          this.nonChemical = false;
          this.success = true;
          this.getServiceOrder();
        }
      })
    }else{
      this.errorText ="Please fill all details";
      this.error = true;
    }
    
  }
}
