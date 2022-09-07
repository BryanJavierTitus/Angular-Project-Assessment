import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
}
