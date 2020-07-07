import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api-service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service';
import { ListPicker } from '@nativescript/core';
import { LogInService } from '../../services/login-service';
import { LoaderService } from '../../services/loader-service';
import { openUrl } from '@nativescript/core/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Senitization';
  userName: string;
  password: string;
  userType: string;
  userTypeList: string[];
  userDetails = {};
  error: boolean;
  errorText: string;

  constructor(public loaderService: LoaderService, private apiService: APIService, private router: Router, private dataService: DataService, private loginService: LogInService) { }

  ngOnInit() {
    this.loginService.userDetail = {};
    this.loginService.isLoggedIn = false;
    this.userTypeList = this.dataService.userType;
  }

  routeToHhWebsite() {
    openUrl('https://helpinghand1.mybluemix.net/api/newlogin');
  }

  routeToSignUp() {
    this.router.navigate(['/signup']);
  }

  routeToServiceProvider() {
    this.router.navigate(['/serviceProvider']);
  }

  routeToServiceProviderOrder() {
    this.router.navigate(['/order']);
  }

  routeTocontributor() {
    this.router.navigate(['/contributor']);
  }

  login() {
    this.errorText = "";
    this.error = false;
    if (this.userDetails['username'] && this.userDetails['password']) {
      this.apiService.login(this.userDetails)
        .subscribe(data => {
          console.log("Login --------------->>>>>>>>>>");
          console.log(data);
          if (data.error) {
            console.log(data.error);
            this.errorText = data.error;
            this.error = true;
          } else {
            this.loginService.userDetail = data;
            this.loginService.isLoggedIn = true;
            console.log(data);
            this.error = false;
            switch (data.role) {
              case 'SERVICE_PROVIDER':
                this.routeToServiceProviderOrder();
                break;
              case 'CONSUMER':
                this.routeToServiceProvider();
                break;
              case 'CONTRIBUTOR':
                this.routeTocontributor();
                break;
              default:
              // code block
            }
          }
        })
    } else {
      this.errorText = "Please Enter All Details";
      this.error = true;
    }

  }

  public userTypeChanged(args) {
    const picker = <ListPicker>args.object;
    this.userDetails['role'] = this.userTypeList[picker.selectedIndex];
  }
}
