import { JitEvaluator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService,private _auth:AuthService,private _route:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  routeIfLogged(){
    if(this._auth.isLoggedIn()){
        this._route.navigate(['/payment']);
    }
    else{
      alert("Please login to continue");
      this._route.navigate(['login']);
    }

  }

}






   






