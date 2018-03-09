import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {ConstantsService} from '../service/constants.service';

@Injectable()
export class RegisterService {

  //registerApiUrl: string;

  constructor(private _http: HttpClient,public constantsService: ConstantsService) {
  }

  // medProValidation(obj):Observable<any>{
  //   return "true";
  // }

  medProValidation(obj):Observable<any> {
    return this._http.post(this.constantsService._baseURL +'/medpro',obj,{withCredentials: true }).pipe(res => {
      return res;
    },error =>{
      return error;
    });
  }
  autoSuggestionService(obj): Observable<any> {
    return this._http.get('https://autocomplete-api.smartystreets.com/suggest?auth-id=df70b873-a62d-7f2e-72e0-68124a2b6980&auth-token=wDw6n8AV33HqdbrskuX1&prefix=' + obj + '&suggestions=10').pipe(res => {
      console.log(res);
      return res;
    });
  }

  addressLookup(obj): Observable<any> {
    console.log(obj);
    return this._http.get('https://api.smartystreets.com/street-address?auth-id=df70b873-a62d-7f2e-72e0-68124a2b6980&auth-token=wDw6n8AV33HqdbrskuX1&street=' + obj).pipe(res => {
      console.log(res);
      return res;
    },error =>{
      return error;
    });
  }

  userSignup(obj): Observable<any> {
    return this._http.post(this.constantsService._baseURL +'/signup',obj,{withCredentials: true }).pipe(res => {
      return res;
    },error =>{
      return error;
    });
  }

  getStartedHcp(obj):Observable<any> {
    return this._http.post(this.constantsService._baseURL +'/getStarted',obj,{withCredentials: true }).pipe(res => {
      return res;
    },error =>{
      return error;
    });
  }

  getStartedAdm(obj):Observable<any> {
    return this._http.post(this.constantsService._baseURL +'/adminGetStarted',obj,{withCredentials: true }).pipe(res => {
      return res;
    },error =>{
      return error;
    });
  }

  verifyEmail(obj):Observable<any> {
    return this._http.post(this.constantsService._baseURL +'/emailverification',obj,{withCredentials: true }).pipe(res => {
      return res;
    },error =>{
      return error;
    });
  }

}
