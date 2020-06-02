import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/model/user.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { timeout } from 'rxjs/operators';


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
  signIn() {
    
    this.authService.signInUser(this.loginObject).subscribe((response) => {
     
      console.log(response);
      this.result = response;
      this.options = {
        autoClose: false,
        keepAfterRouteChange: false
    };
    alert('success')
      this.alertService.success('Success!!', this.options)
      
      // alert("Token:" + this.result.token);
     
      if ((this.result.success == true)){
        localStorage.setItem('token', this.result.token);
        localStorage.setItem('_id',this.result._id);
        this.router.navigate(['/'])
        
          let id=localStorage.getItem('_id')
   
    this.registerService.getUserById(id).subscribe((response)=>{
      // console.log(response);
      this.users=response;
      if(this.users.type==this.typeE){
        this.authService.isLoggedIn=()=>{
          return true;
        };
        localStorage.setItem('Employee',this.result.success);
        
      }
      else if(this.users.type==this.typeC){
        this.authService.isLoggedIn=()=>{
          return true;
        };
        
      }
      else{
        this.authService.isLoggedIn=()=>{
          return false;
        };
         
        
        alert("you might be Customer please select correct option")
        this.router.navigate(['/login'])
      }
    })}
      
     
      else {
         this.errorMessage = "invalid username or password";
         alert('Incorrect email or password')
        this.router.navigate(['/login']);
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
