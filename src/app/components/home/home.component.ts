import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/model/user.model';
import { Gadget } from 'src/app/model/gadget.model';
import { GadgetService } from 'src/app/services/gadget.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count=0;
  gadget:any={
  
    name:"",
    type:"",
    colour:"",
    cost:"",
    poster:"",
    description:"",
    productCount:"",
    _id:"",
  }
  result:any;
  x:any;
  users:any={
    name:"",
    email:"",
    type:"",
    _id:""
  }
  gadgets:Gadget[]=[];
  
  constructor(private router:Router,private authService:AuthService,private registerService:RegisterService ,private activatedRoute:ActivatedRoute,private gadgetService:GadgetService,private cartService:CartService) { }

  ngOnInit() {
    let id=localStorage.getItem('_id')
   
    this.registerService.getUserById(id).subscribe((response)=>{
      console.log(response);
      this.users=response;
    })
    
this.getGadgetsFromService()
  }
  getGadgetsFromService(){
    this.gadgetService.getGadgets().subscribe((response)=>{
      this.gadgets=response;
      console.log(this.gadgets)
    })
  }
  addCartToService(name,type,colour,cost,poster,description){
    
    
    if(this.authService.isLoggedIn()){
this.cartService.addCart(name,type,colour,cost,poster,description).subscribe((response)=>{
this.result=response;
this.gadgetService.getGadgetById(this.result._id).subscribe((response)=>{
  console.log(response);
  this.gadget=response;
})
this.gadgetService.updateGadgetById(this.result._id,this.gadget.productCount-1).subscribe((response)=>{
  
})
  console.log(this.result._id)
})}
else{
this.router.navigate(['/login'])
}
  }
  
  //username = this.registerService.getUsername();
}
