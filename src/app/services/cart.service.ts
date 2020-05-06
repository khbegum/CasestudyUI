import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:Cart[]=[];
count:number;
   constructor(private http:HttpClient){}
  serviceUrl:string="http://localhost:3004/api/cart/";
  addCart(name,type,colour,cost,poster,description){
  
      let newCart={name:name,type:type,colour:colour,cost:cost,poster:poster,description:description};
      return this.http.post(this.serviceUrl,newCart);
  }
  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.serviceUrl);
    
  }
  
  deleteGadgetFromCart(cart){
    alert(cart._id);
    return this.http.delete(this.serviceUrl+cart._id);
      }
  
}
