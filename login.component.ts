import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User()
  usersList:Array<User>=[];
  

  constructor(private _router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.getAllUsers().subscribe(res=>{
      this.usersList=res;

      if(this.isValidUser()){
        localStorage.setItem('isLoggedIn','true');
        console.log("Fresh from LS "+localStorage.userId);
        
        this._router.navigate(['/products'])
      }
      else{
        alert("Invalid Credientials")
        this.clearFields();
      }
    },err=>{
      console.log(err);
      
    })

    

  }
  clearFields(){
    this.user=new User();
  }

  isValidUser():boolean{
    for(const usr of this.usersList){
      if(this.user.username==usr.username && this.user.password==usr.password){
        // localStorage.setItem('userId',JSON.stringify(usr.id));
        localStorage.clear();
        // localStorage.removeItem('userId');
        localStorage.setItem('userId',JSON.stringify(usr.id));

        return true;
      }
    }
    return false;
  }


}
