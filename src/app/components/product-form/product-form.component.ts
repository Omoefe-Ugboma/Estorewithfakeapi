import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
