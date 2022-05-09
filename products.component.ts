import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any;
  searchText:any;
  constructor(private _productService:ProductService,private cartService:CartService ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a : any) => {
        Object.assign(a,{ quantity:1,total:a.price});
      });
    },err=>{
      console.log(err);
      
    })
  }

  addtocart(item:any){
    this.cartService.addtoCart(item);
     

  }



}
