import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  serviceUrl: string = "http://localhost:3004/api/auth/";
  constructor(private router: Router, private http: HttpClient) { }
  signInUser(loginInfo: any) {
    
      return this.http.post(this.serviceUrl, loginInfo)
  }
  loggedIn() {
    
      return !!sessionStorage.getItem('token');
  }

  
  isLoggedIn() {
    if (sessionStorage.getItem('token')==null) {
      return false;
    }
    return true;
  }
  isEmployee(){
return sessionStorage.getItem('Employee')
  }
}
