import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {
      
   }

   getAllUsers(){
     return this._http.get<User[]>("http://localhost:3000/users");
      
    }

    getUserById(id:number){
      return this._http.get<User>(`http://localhost:3000/users/${id}`);
    }
   }

