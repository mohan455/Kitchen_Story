import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getWelcomeMessage():string{
    return "Hi Bro!";
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`http://localhost:3000/Items`); 
  }

  getDepartmentById(id: number): Observable<Product> {
    return this._http.get<Product>(`http://localhost:3000/Items/${id}`);
  }

  addDepartment(department: Product): Observable<Product> {
    return this._http.post<Product>(`http://localhost:3000/Items`, department);
  }

  updateDepartment(id: number, department: Product): Observable<Product> {
    return this._http.put<Product>(`http://localhost:3000/Items/${id}`, department)
  }

  deleteDepartment(id: number): Observable<Product> {
    return this._http.delete<Product>(`http://localhost:3000/Items/${id}`);
  }
}







