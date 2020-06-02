import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ThankDiaogComponent } from '../thank-diaog/thank-diaog.component';
import { Router } from '@angular/router';
import { GadgetService } from 'src/app/services/gadget.service';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {
carts:Cart[]=[];
 sum:any =0;
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
  constructor(private cartService:CartService, private dialog:MatDialog,private router:Router,private gadgetService:GadgetService) { }

  ngOnInit() {
    this.getCartFromService();
    this.sum
  }
getCartFromService(){
  this.cartService.getCart().subscribe((response)=>{
    this.carts=response
    for(let i=0;i<this.carts.length;i++){
      this.sum=this.sum +((this.carts[i].cost)*(this.carts[i].productCount));
}


  })
}
save(){
  localStorage.setItem('totalPayment',this.sum)
  
  let dialogref=this.dialog.open(ThankDiaogComponent,{
    width:'450px'
  })
   for(let i=0;i<this.carts.length;i++){
    this.cartService.deleteGadgetFromCart(this.carts[i]).subscribe((res)=>{
      console.log(this.carts[i]._id)
    });
this.gadgetService.getGadgetById(this.carts[i]._id).subscribe((res)=>{
  this.gadget=res;
  console.log(this.gadget.productCount)
  this.gadget.productCount=this.gadget.productCount-this.carts[i].productCount;
  console.log(this.gadget.productCount)
this.gadgetService.updateGadgetById(this.gadget._id,this.gadget).subscribe((res)=>{
  console.log(res)
})

})
  
  }
 
  
  dialogref.afterClosed().subscribe((result)=>{
  
    console.log("dialog was closed",result)
    
  })
 
}
cancel(){
  this.router.navigate(['/'])
}






}
