import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Gadget } from 'src/app/model/gadget.model';
import { Cart } from 'src/app/model/cart.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:Cart[]=[];
 sum=0; 
  constructor( private cartService:CartService,private dialog:MatDialog) { }

  ngOnInit() {
    this.getCartFromSerive()
  }
  getCartFromSerive(){
    this.cartService.getCart().subscribe((response)=>{
      this.carts=response
    })
  }
   
//   buy(cost){
//     for(let i=0;i<this.carts.length;i++){
         
//      this.sum=this.sum +this.carts[i].cost;
    
    
//   }
// console.log(this.sum)
// }

buy(){
  let dialogref=this.dialog.open(PaymentDialogComponent,{
    width:'450px'
  })
  dialogref.afterClosed().subscribe((result)=>{
  
    console.log("dialog was closed",result)
  })
    }
  

}
