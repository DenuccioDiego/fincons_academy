import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductContainerComponent } from "./components/product-container/product-container.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";


const routes: Routes = [
    { path: '', component: ProductContainerComponent },
    { path: ':productId', component: ProductDetailComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ProductsRoutingModule {

}