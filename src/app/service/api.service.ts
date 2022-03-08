import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = 'http://localhost:3000/products/';
  
  headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  
  constructor(
    private httpCLient: HttpClient
  ) { }

  getProducts(){
  return this.httpCLient.get(this.baseUrl, {headers: this.headers});
  }

  getProduct(id: number){
    return this.httpCLient.get(`${this.baseUrl}${id}/`, {headers: this.headers});
    }

    createProduct(title: any, price: any,description: any,category: any){
      const body = JSON.stringify({title, price,description,category});
      return this.httpCLient.post(`${this.baseUrl}`, body,{headers: this.headers});
      }

  rateProduct(rate: number, productId: number){
    const body = JSON.stringify({stars: rate});
    return this.httpCLient.post(`${this.baseUrl}${productId}/rate_product/`, body,{headers: this.headers});
    }

}
