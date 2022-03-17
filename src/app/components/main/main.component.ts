import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   
  products:  any = [];
  selectedProduct = null;
  editedProduct: any = null;
  
  constructor(private apiService: ApiService) { }
 
  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      data =>{
        this.products = data;
      },
      error => console.log(error)
    );
  }

  selectedProducts(product: any){
    this.selectedProduct = product;
    this.editedProduct = null;
  }

  editProduct(product: any){
    this.editedProduct = product;
    this.selectedProduct = null;
  }

  createNewProduct(){
    this.editedProduct = {title:'',description:'',category:'',price:''};
    this.selectedProduct = null;
  }

  deletedProduct(product: any){
    // To removeproduct with API
    this.apiService.deleteProduct(product.id).subscribe(
      data =>{
        this.products = this.products.filter((pro: { id: any; }) => pro.id !== product.id);
      },
      error => console.log(error)
    );
  }

  productCreated(product: any){
    this.products.push(product);
    this.editedProduct= null;
  } 

  productUpdated(product: any){
    const indx = this.products.findIndex((pro: { id: any; }) => pro.id === product.id);
    if(indx >= 0){
      this.products[indx] = product;
    }
    this.editedProduct = null;
  } 


}
