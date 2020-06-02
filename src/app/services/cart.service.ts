import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';
import { Gadget } from '../model/gadget.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:Cart[]=[];

count:number;
   constructor(private http:HttpClient){}
  serviceUrl:string="http://localhost:3004/api/cart/";
  addCart(_id,name,type,colour,cost,poster,description,productCount){
  
      let newCart={_id:_id,name:name,type:type,colour:colour,cost:cost,poster:poster,description:description,productCount:productCount};
      return this.http.post(this.serviceUrl,newCart);
  }
  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.serviceUrl);
    
  }
  getGadgetById(_id):Observable<Cart[]>{
    return this.http.get<Cart[]>(this.serviceUrl+_id);
  }
  deleteGadgetFromCart(cart){    
    return this.http.delete(this.serviceUrl+cart._id);
      }
      updateGadgetById(id,newCart){
        return this.http.put(this.serviceUrl+id,newCart);
    
      }
  
}
