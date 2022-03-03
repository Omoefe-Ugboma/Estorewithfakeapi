import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = 'https://fakestoreapi.com/products';
  
  header = new HttpHeaders({
    'Content-Type':'application/json'
  });
  
  constructor(
    private httpCLient: HttpClient
  ) { }

  getProducts(){
  return this.httpCLient.get(this.baseUrl);
  }
}
