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
    this.editedProduct = {title:'',description:'',category:'',image:''};
    this.selectedProduct = null;
  }

  deletedProduct(product: any){
    // To removeproduct with API
    this.apiService.deleteProduct(product.id).subscribe(
      data =>{
        console.log(data);
      },
      error => console.log(error)
    );
  }

}
