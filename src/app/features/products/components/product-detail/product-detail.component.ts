import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/model/product-model';

@Component({
  selector: 'fin-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // PROMEMORIA HO CAMBIATO IN TSCONFIG.JSON LA VARIABILE STRICT:FALSE

  loading: boolean = true;
  selectProduct: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

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

  saveProductByForm(productDetailForm: NgForm): void {
    const obj: Product = {
      id: this.selectProduct.id,
      descrizione: productDetailForm.value.descrizione,
      codice: this.selectProduct.codice,
      qta: this.selectProduct.qta,
      costo: this.selectProduct.costo,
      scadenza: this.selectProduct.scadenza
    }

    this.productService.editProduct(obj).subscribe(
      result => {
        this.selectProduct = result;
        this.loading = false;
        this.router.navigateByUrl('products');
      }, error => {
        console.log(error);
        this.loading = true;
      }
    )

  }


}
