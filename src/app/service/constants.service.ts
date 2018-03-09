import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {


  public  url:any ;
  public  arr:any ;
  public  result:any;
  public _baseURL:any;
  
  constructor() {

    console.log(localStorage.getItem('userDetails'));
    

   
    this.url = window.location.href;
    this.arr = this.url.split("/");
    this.result = this.arr[0] + "//" + this.arr[2] + "/api";

    this._baseURL = window.location.host == 'localhost:4200' ? "http://sample.dinkarkumar.com/api" : this.result;
    //this._baseURL = window.location.host == 'localhost:4200' ? "http://alz.local/api" : this.result;
   
  }


  public loginErrorCode: Object = {
    'required' : "This information is required.",
    'wrongEmail': "Sorry, your login information was not recognized. Please try again.",
    'wrongPattern' : "Sorry, this email address is not valid. Please try again.",
    'invalidCredential': 'Sorry, your login information was not recognized. Please try again.'
  };
  public forgotErrorCode:Object = {
    'invalidEmail': 'Sorry, the email address is not found in our system.',
    'emailSent': 'An email has been sent to you to create a new password.'
  }

}
