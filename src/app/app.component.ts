import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'music-store-app';
  count:number;
  coins:any=0;
  payment:any;
  cash:any=0;
  constructor(private authService:AuthService,private cartService:CartService){
     
  }
  isEmployee(){
    return this.authService.isEmployee();
  }
  logOut(){
    this.authService.logOutUser();
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  ngOnInit(){
  
  console.log(this.cartService.count)
  this.cartService.getCart().subscribe((data)=>{
    this.count=data.length
    console.log(this.count)
  })
    this.coins;
    this.cash;
     this.payment=localStorage.getItem('totalPayment');
     console.log(this.payment)
    if(this.payment >= 1000){
this.coins=this.coins+(0.005*this.payment)

    }
    if(this.coins>=500){
this.cash=this.cash+(0.1*this.coins)
    }

    
  }
  
  
}
