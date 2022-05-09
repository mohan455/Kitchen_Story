import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _http:HttpClient) { }
  canActivate(): boolean {
    if(this.isLoggedIn()) return true;
    return false;
  }

  isLoggedIn(){
    if(localStorage.getItem('isLoggedIn')=='true'){
      return true;
    }
    return false;
  }

  Logout(){
     localStorage.removeItem('isLoggedIn');
     localStorage.removeItem('userId');
     localStorage.clear();
  }

  addUser(user:User):Observable<User>{
    return this._http.post<User>("http://localhost:3000/users",user);
  
  }

  refreshUid(){
    return parseInt(localStorage.userId);

  }
}
