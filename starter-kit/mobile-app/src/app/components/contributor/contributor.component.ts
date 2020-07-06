import { Component, OnInit } from '@angular/core';
import {APIService} from '../../services/api-service' 
import { Router } from '@angular/router';
import { LogInService } from '@src/app/services/login-service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css'],
})
export class ContributorComponent implements OnInit {
  amount: number;
  cityName: string;
  error: boolean;
  success: boolean;
  contributionDetails: any;
  noContribution: boolean;
  errorText: string;

  constructor(private apiService: APIService, private router: Router, private loginData: LogInService)  { }

  ngOnInit() {
    this.getContribution();
  }

  getContribution(){
    this.apiService.contribution({"userId": this.loginData.userDetail['_id']}).subscribe(data=>{
      console.log("Get Contribution --------------->>>>>>>>>>");
      console.log(data);
      if(data.error){
        this.noContribution = true;
      }else{
        this.noContribution = false;
        this.contributionDetails = data;
      }
    })
  }

  submit(){
    this.error = false;
    this.success = false;
    this.errorText = "";
    if(this.cityName && this.amount){
      let data = {
        "userId": this.loginData.userDetail['_id'],
        "city": this.cityName,
        "amount": this.amount
      }
      this.apiService.contribute(data).subscribe(data=>{
        console.log("Submit Contribution --------------->>>>>>>>>>");
        console.log(data);
        if(data.error){
          this.errorText = data.error;
          this.error = true;
        }else{
          this.success = true;
          this.amount = null;
          this.cityName = "";
          this.getContribution();          
        }
      })
    }else{
      this.errorText = "Please fill all details";
      this.error = true;
    }    
  }
} 
