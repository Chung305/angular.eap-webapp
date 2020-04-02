import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp } from '../model/sign-up';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  countryApi : string = "https://overseas-connection-api.herokuapp.com/"

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  //replace with api endpoint
  signUp(signUp_form: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>('apiString', signUp_form, this.httpOptions)

  };

  getCountries(){
    return this.http.get(this.countryApi + "country/");
  }

  getStates(countryName: string){
    return this.http.get(this.countryApi + "country/" + countryName + "/states");
  }
}
