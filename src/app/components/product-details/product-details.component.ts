import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product: any;
  @Output() updateProduct = new EventEmitter();
  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.product.currentValue);
    // this.product = changes.product.currentValue;

  }
  rateHover(rate: number){
    this.rateHovered = rate;
  }

  rateClick(rate: number){
    this.apiService.rateProduct(rate, this.product.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
    );
  }

  getDetails(){
    this.apiService.getProduct(this.product.id).subscribe(
      product =>{
        this.updateProduct.emit(product);
      },
      error => console.log(error)
    );
  }

}
