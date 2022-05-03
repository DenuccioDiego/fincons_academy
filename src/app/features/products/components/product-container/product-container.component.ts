import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productService: ProductService, private router: Router) {

    this.productService.getAllProducts().subscribe(
      result => {
        this.productList = result;
      }, error => {
        console.log(error);
      }
    );

  }

  detailProductSelectionHandler(product: Product): void {
    const url = `products/${product.id};`
    this.router.navigateByUrl(url);

    console.log(url);
  }

  deleteProductSelectionHandler(product: Product): void {

    this.productService.deleteProduct(product.id).subscribe(
      response => {
        this.productList = this.productList.filter(el => el.id !== product.id)
      }, error => {
        console.log(error)
      }
    )
    console.table(product);
  }







  /*  deleteFunction(object: Object, args: any[]) {
     const indexOfObject = args.findIndex((e) => {
       return e === object;
     });
     args.splice(indexOfObject, 1);
   } */
}
