import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product-model';

@Component({
  selector: 'fin-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  ngOnInit(): void {
  }

  productList: Product[] = [];

  constructor() {
    this.buildProductArray();
  }

  private buildProductArray(): void {
    this.productList = [
      {
        name: 'Pasta',
        description: 'pasta provienete dalla puglia',
        price: 4,
        expiry: "22/04/2025",
        rating: 5,
        qty: 50,
      },
      {
        name: 'Pomodoro',
        description: 'pomodoro provienete dalla sicilia',
        price: 40,
        expiry: "10/12/2028",
        rating: 1,
        qty: 25,
      },
      {
        name: 'Vino',
        description: 'vino francese',
        price: 55,
        expiry: "12/01/2027",
        rating: 4,
        qty: 75,
      },
      {
        name: 'Carciofo',
        description: 'Lorem ipsum dolor sit amet.',
        price: 24,
        expiry: "12/08/2200",
        rating: 3,
        qty: 200,
      },
    ]
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
