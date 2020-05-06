import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
users:User
  serviceUrl: string = "http://localhost:3004/api/users/";

  constructor(private http: HttpClient) { }

  getUserById(_id):Observable<User>{
    return this.http.get<User>(this.serviceUrl+_id);
  }
    addUser(name, email,type, password) {
    let newUser = {
      name:name,
      email: email, 
      type:type,
      password: password,
      
    }
   

    console.log(newUser);
    return this.http.post(this.serviceUrl, newUser);
    

  }


}
