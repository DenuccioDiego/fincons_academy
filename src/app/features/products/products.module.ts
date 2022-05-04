import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListItem } from './components/product-list-item/product-list-item.component'
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListItem,
    ProductContainerComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductContainerComponent,
  ]
})
export class ProductModule { }
