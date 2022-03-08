import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  @Input() product: any;

  productForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      image: new FormControl(''),
      no_of_rating: new FormControl(''),
      avg_rating: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.productForm.value);
  }

}
