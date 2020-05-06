import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ThankDiaogComponent } from '../thank-diaog/thank-diaog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {
carts:Cart[]=[];
 sum:any =0;
  constructor(private cartService:CartService, private dialog:MatDialog,private router:Router) { }

  ngOnInit() {
    this.getCartFromService();
    this.sum
  }
getCartFromService(){
  this.cartService.getCart().subscribe((response)=>{
    this.carts=response
    for(let i=0;i<this.carts.length;i++){
      this.sum=this.sum +this.carts[i].cost;
}


  })
}
save(){
  localStorage.setItem('totalPayment',this.sum)
  
  let dialogref=this.dialog.open(ThankDiaogComponent,{
    width:'450px'
  })
  
  dialogref.afterClosed().subscribe((result)=>{
  
    console.log("dialog was closed",result)
  })
}
cancel(){
  this.router.navigate(['/'])
}






}
