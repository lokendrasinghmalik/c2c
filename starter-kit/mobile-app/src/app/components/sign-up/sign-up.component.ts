import { Component, OnInit } from '@angular/core';
import {APIService} from '../../services/api-service' 
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service';
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  title = 'Sign Up';
  confirmPassword: string; 
  userType: string;
  userTypeList: string[];
  userDetails = {};
  error: boolean;
  errorText: string;

  constructor(private apiService: APIService, private router: Router, private dataService: DataService)  {}

  ngOnInit() {
    this.userTypeList = this.dataService.userType;
  }

  userTypeChanged(args) {
    const picker = < ListPicker > args.object;
    this.userDetails['role'] = this.userTypeList[picker.selectedIndex];
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  getLowerCase(text: string): string{
    return text.toLowerCase();
  }

  signUp() {
    this.error = false;
    this.errorText = "";
    if(this.userDetails['password'] && this.userDetails['username'] && this.userDetails['address'] && this.userDetails['fullName'] &&
    this.userDetails['city'] && this.userDetails['mobileNumber'] && this.userDetails['email'] && this.confirmPassword){
      if(this.userDetails['password'] === this.confirmPassword){
        this.userDetails['city'] = this.getLowerCase(this.userDetails['city']);
        this.apiService.signUp(this.userDetails)
        .subscribe(data=>{
          console.log("SignUp  --------------->>>>>>>>>>");
          console.log(data);
          if(data.error){
            console.log(data.error);
            this.error = true;
            this.errorText = data.error;
          }else{
            console.log(data);
            this.error = false;
            this.redirectToLogin();
          }        
        })  
      }else{
        this.errorText = "Password and confirm password doesn't match";
        this.error = true;        
      } 
    }else{
      this.errorText = "Please Enter All Details";
      this.error = true;
    }    
  }
}
