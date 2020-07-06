import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public _userType: Array< string > = ["CONSUMER","SERVICE_PROVIDER","CONTRIBUTOR"];
  public _serviceProvider: any;

  constructor() {}

  //Static User Type 
  public set userType(type){
    this._userType = type;
  }

  public get userType(){
    return this._userType;
  }

  //Servie Provider Details
  public set serviceProvider(data){
    this._serviceProvider = data;
  }

  public get serviceProvider(){
      return this._serviceProvider;
  }
}
