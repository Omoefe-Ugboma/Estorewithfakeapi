import { error } from '@angular/compiler/src/util';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: any = [];
  @Output() selectedProducts = new EventEmitter<any>();
  @Output() editedProduct = new EventEmitter<any>();
  @Output() createNewProduct = new EventEmitter<any>();
  @Output() deletedProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(){

  }

  productClicked(product: any){
    this.selectedProducts.emit(product)
    // console.log(product)
  }
  editProduct(prolist: any){
   this.editedProduct.emit(prolist)
  }

  newProduct(){
    this.createNewProduct.emit();
   }

   deleteProduct(prolist: any){
    this.deletedProduct.emit(prolist);
   }

}
 