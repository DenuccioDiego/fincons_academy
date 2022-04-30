import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/model/product-model';

@Component({
  selector: 'fin-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() detail: Product;

  @Output() detailProductSelection: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteProductSelection: EventEmitter<Product> = new EventEmitter<Product>();


  constructor() {
    this.detail = {} as Product;
  }

  ngOnInit(): void {
  }

  detailProductSelectionHandler(): void {
    //console.log(this.detail);
    this.detailProductSelection.emit(this.detail);
  }

  deleteProductSelectionHandler(): void {
    this.deleteProductSelection.emit(this.detail);
  }

}
