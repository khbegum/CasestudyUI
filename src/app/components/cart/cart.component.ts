import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Gadget } from 'src/app/model/gadget.model';
import { Cart } from 'src/app/model/cart.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:Cart[]=[];
 sum=0; 
  constructor( private cartService:CartService,private router:Router) { }

  ngOnInit() {
    this.getCartFromSerive();
    this.cartService.count=this.carts.length;
    console.log(this.cartService.count)
  }
  getCartFromSerive(){
    this.cartService.getCart().subscribe((response)=>{
      this.carts=response
      //console.log(this.carts.length)
      
    })
  }
  deleteGadgetFromService(gadget){
    alert(gadget._id);
    
    this.cartService.deleteGadgetFromCart(gadget).subscribe((response)=>{
      alert('Data Deleted');
      this.getCartFromSerive();
    })
      }


buy(){
this.router.navigate(['/payment'])
  // let dialogref=this.dialog.open(PaymentDialogComponent,{
  //   width:'450px'
  // })
  // dialogref.afterClosed().subscribe((result)=>{
  
  //   console.log("dialog was closed",result)
  // })
    }
  

}
