import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LogInService {
    public _isLoggedIn: boolean;
    public _userDetail: any;
  constructor(private router: Router) {}

  public set isLoggedIn(type){
    this._isLoggedIn = type;
  }

  public get isLoggedIn(){
    return this._isLoggedIn;
    }
    
  public set userDetail(user){
      this._userDetail = user;
  }
  
  public get userDetail(){
      return this._userDetail;
  }

  public logout(){
    this.router.navigate(['/login']);
  }
}
