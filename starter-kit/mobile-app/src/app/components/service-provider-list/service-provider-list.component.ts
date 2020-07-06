import { Component, OnInit } from '@angular/core';
import {APIService} from '../../services/api-service' 
import { Router } from '@angular/router';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { LogInService } from '../../services/login-service';
import { DataService } from '@src/app/services/data-service';

@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css'],
})
export class ServiceProviderListComponent implements OnInit {
  title = 'Service Provider';
  emailId: string;
  password: string;
  confirmPassword: string; 
  error: boolean; 
  errorText: string;
  spData = {};

  constructor(private apiService: APIService, private router: Router, public loginService: LogInService, private dataService: DataService)  { }

  ngOnInit() {
  }

  getLowerCase(text: string): string{
    return text.toLowerCase();
  }

redirectToLogin(){
  this.router.navigate(['/login']);
}

onItemTap(event){
  if(this.loginService.isLoggedIn){
    this.dataService.serviceProvider = this.spData['list'][event.index];
    this.router.navigate(['/serviceProviderDetail']);
  }else{
    this.errorText = "Please login for complete provider details and place order(s)";
    this.error = true;
  }  
}
  onSearchSubmit(args): void {
    let searchBar = <SearchBar>args.object;
    this.error = false;    
    this.spData = {};
    if(searchBar.text){
      this.apiService.getServiceProvider(this.getLowerCase(searchBar.text)).subscribe(data=>{
        console.log("Submit Search for Service Provider  --------------->>>>>>>>>>");
        console.log(data);
        if(data.error){
          console.log(data.error);
          this.error = true;
          this.errorText = data.error;
        }else{
          this.spData = data;
          console.log(data);
          this.error = false;
        }   
      })
    }  
  }
}
