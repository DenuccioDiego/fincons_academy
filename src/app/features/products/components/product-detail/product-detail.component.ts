import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/model/product-model';

@Component({
  selector: 'fin-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  loading: boolean = true;
  selectProduct?: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      next => {
        const id = next['productId'];
        this.loadDetailProduct(id);
      }, err => {
        console.log(err);
      }
    )

  }

  private loadDetailProduct(id: number): void {
    this.productService.getOneProduct(id).subscribe(
      response => {
        this.selectProduct = response;
        this.loading = false;
      }, error => {
        console.log(error);
      }
    );
  }


}
