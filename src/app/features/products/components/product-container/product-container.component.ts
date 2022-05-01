import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/model/product-model';

@Component({
  selector: 'fin-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  productList: Product[] = [];

  ngOnInit(): void {
  }

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe(
      result => {
        this.productList = result;
      }, error => {
        console.log(error);
      }
    )
  }

  deleteFunction(object: Object, args: any[]) {
    const indexOfObject = args.findIndex((e) => {
      return e === object;
    });
    args.splice(indexOfObject, 1);
  }

  detailProductSelectionHandler(product: Product): void {
    console.table(product);
  }

  deleteProductSelectionHandler(product: Product): void {
    this.deleteFunction(product, this.productList);
    console.table(product);
  }

}
