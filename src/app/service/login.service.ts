import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {ConstantsService} from './constants.service';


@Injectable()

export class LoginService {

	constructor(private _http:HttpClient, public _constantsService: ConstantsService) {

	}

	// User Login
	login(obj) {
		return this._http.post(this._constantsService._baseURL+'/login', obj,{withCredentials: true }).pipe(res => {
			return res;
		},error =>{
      return error;
    });
	}

//User Logout
	logout() {
		return this._http.post(this._constantsService._baseURL+'/logout', '',{withCredentials: true }).pipe(res => {
		  return res;
		},error =>{
		  return error;
    });
	}

	//User forgot password
	forgotPassword(obj) {
		return this._http.post(this._constantsService._baseURL+'/forgot', obj,{withCredentials: true }).pipe(res => {
			return res;
		},error =>{
      return error;
    });
	}

	callResetPass(obj) {
		return this._http.post(this._constantsService._baseURL+'/reset', obj,{withCredentials: true }).pipe(res => {
			return res;
		},error =>{
      return error;
    });
	}
}
