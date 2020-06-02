import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Gadget } from 'src/app/model/gadget.model';
import { Cart } from 'src/app/model/cart.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { GadgetService } from 'src/app/services/gadget.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:Cart[]=[];
key:any;
cartEdit:any={
  
  name:"",
  type:"",
  colour:"",
  cost:"",
  poster:"",
  description:"",
  productCount:"",
  _id:"",
}
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
 count=0;
 enable:boolean=false;
  constructor( private cartService:CartService,private gadgetService:GadgetService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getCartFromSerive();

   
  }
  getCartFromSerive(){
    this.cartService.getCart().subscribe((response)=>{
      this.carts=response
     this.count=this.carts.length;
      
    })
  }
  deleteGadgetFromCart(gadget){
    this.cartService.deleteGadgetFromCart(gadget).subscribe((result)=>{
      alert('deleted');
      this.getCartFromSerive();
    })
  }
  


buy(){
this.router.navigate(['/payment'])

    }
    editProductCount(id){
      this.key=id;
      this.cartService.getGadgetById(id).subscribe((response)=>{
        console.log(response);
        this.cartEdit=response;
   
        
      })
      this.gadgetService.getGadgetById(id).subscribe((res)=>{
        this.gadget=res;
        
          
        
        })
       if(id){
          this.enable=true;
        
       }
     
    }
  save(){
    if(this.gadget.productCount >= this.cartEdit.productCount){
    this.cartService.updateGadgetById(this.cartEdit._id,this.cartEdit).subscribe((response)=>{
      this.enable=false;
      this.getCartFromSerive()
      this.router.navigate(['/cart'])

    })}
    else{
      alert('products are out of stock');
      this.enable=false;
    }
  }
  cancel(){
    this.enable=false;
  }

}

