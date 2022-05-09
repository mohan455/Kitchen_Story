import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:User=new User();
  confirmPass:any;
  id:any;
  constructor(private _userService:UserService,private _route:ActivatedRoute,private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.paramMap.get('id');
    this._userService.getUserById(this.id).subscribe(res=>{

      this.user=res;
      this.user.password="";
    },err=>{
      console.log(err);
      
    })
  }

  updateUser():void{
    if(this.user.password!=this.confirmPass){
      alert("passwords doesn't match");
      return;
    }
    this._http.put(`http://localhost:3000/users/${this.id}`,this.user).subscribe(res=>{
      alert("Update Successfully");
      this._router.navigate(['/products']);
    },err=>{
      console.log(err);
      
    })
  }

}
