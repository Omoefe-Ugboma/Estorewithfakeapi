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
  @Output() selectedProducts = new EventEmitter();

  constructor() { }

  ngOnInit(){

  }

  productClicked(product: any){
    this.selectedProducts.emit(product)
    // console.log(product)
  }

}
 