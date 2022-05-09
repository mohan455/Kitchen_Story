import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public totalItems:number=0;
  // uid:any=localStorage.getItem('userId');
  uid:any;
  constructor(private cartService:CartService,private authService:AuthService,private _route:Router) { }

  ngOnInit(): void {
    this.authService.refreshUid();
    this.uid=parseInt(localStorage.userId);
    console.log("The UID Retrieved from local storage is ..."+this.uid);

    this.cartService.getProducts().subscribe(res=>{
      this.totalItems=res.length;
    }, err=>{
      console.log(err);
      
    })
  }

  checkLoginStatus():boolean{
    if(this.authService.isLoggedIn()){
        return true;
    }
    return false;

  }

  logout(){
    this.authService.Logout();
    this._route.navigate(['/products'])
  }

  refresh(){
    this.uid=parseInt(localStorage.userId);

  }

  

}
