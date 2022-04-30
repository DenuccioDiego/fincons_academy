import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductContainerComponent,
  ]
})
export class ProductModule { }
