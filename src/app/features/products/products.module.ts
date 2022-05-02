import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListItem } from './components/product-list-item/product-list-item.component'
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductListItem,
    ProductContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductContainerComponent,
  ]
})
export class ProductModule { }
