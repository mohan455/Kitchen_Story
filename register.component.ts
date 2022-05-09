import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();

  constructor(private authService:AuthService,private _route:Router) { }

  ngOnInit(): void {
  }

  addUser(){
    this.authService.addUser(this.user).subscribe(res=>{
      alert("Registered successfully");
      this._route.navigate(['/login']);
      this.authService.Logout();

    },err =>{
      console.log(err);
      
    })
   

  }

}