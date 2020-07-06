import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    public _showLoader: boolean = false;
  constructor() {}

  public set showLoader(type){
    this._showLoader = type;
  }

  public get showLoader(){
    return this._showLoader;
    }
}
