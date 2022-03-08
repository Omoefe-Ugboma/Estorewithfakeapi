import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
   
  productForm:any;
  id = null;

  @Input() set product(val: any){
    this.id = val.id;
    // console.log(this.id);
    this.productForm = new FormGroup({
      title: new FormControl(val.title),
      price: new FormControl(val.price),
      description: new FormControl(val.description),
      category: new FormControl(val.category),
      // image: new FormControl(val.image)
      // no_of_rating: new FormControl(val.no_of_rating),
      // avg_rating: new FormControl(val.avg_rating)
  });
  }



  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
  }

  saveForm(){
    // console.log(this.productForm.value);
    if(this.id){
      this.apiService.updateProduct(this.id,
        this.productForm.value.title,
        this.productForm.value.price,
        this.productForm.value.description, this.productForm.value.category
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    }else{
      this.apiService.createProduct(
        this.productForm.value.title,
        this.productForm.value.price,
        this.productForm.value.description, this.productForm.value.category
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    }
    
  }

}
