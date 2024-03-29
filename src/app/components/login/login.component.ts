import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/model/user.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { timeout } from 'rxjs/operators';
import { timer } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // users:any={
  //   name:"",
  //   email:"",
  //   type:"",
  //   _id:""
  // }
  alertDisplay:any;
  options:any;
  users:User;
  loginFormDisplay=false;
  employeeCustomerDisplay=true;
  typeE:string;
  typeC:string;

  loginObject = {
    email: '',
    password: ''
  };
  result: any;
  errorMessage: string = "";
   
  constructor(private authService: AuthService,private router:Router,private registerService:RegisterService,private alertService:AlertService) {
    
   }
  
  signIn(){
    this.authService.signInUser(this.loginObject).subscribe((response)=>{
      this.result=response;
      
  console.log(this.result);
  if(this.result.success==true){
    sessionStorage.setItem('token',this.result.token);
      sessionStorage.setItem('_id',this.result._id);
        this.router.navigate(['/'])
        
          let id=sessionStorage.getItem('_id')
   
   this.registerService.getUserById(id).subscribe((response)=>{
      console.log(response);
      this.users=response;
      if(this.users.type==this.typeE){
        this.authService.isLoggedIn=()=>{
          return true;
        };
        sessionStorage.setItem('Employee',this.result.success);
        
      }
      else if(this.users.type==this.typeC){
        this.authService.isLoggedIn=()=>{
          return true;
        };
        
}
      else{
        sessionStorage.removeItem('token');
       
        alert("you might be Customer please select correct option");
        
        this.authService.isLoggedIn=()=>{
          return false;
        };
        this.router.navigate(['/login'])
      }
    })
  }
  else{
    this.errorMessage=this.result.message;
    //alert('fail')
    this.router.navigate(['/login'])
  }
  })
}

    

  ngOnInit() {
  }
  employee(){
  this.typeE="Employee";
 
    this.loginFormDisplay=true;
    this.employeeCustomerDisplay=false;
    
  }

  customer(){
    this.typeC="Customer"
    this.loginFormDisplay=true
    this.employeeCustomerDisplay=false;
    
  }
  
}
