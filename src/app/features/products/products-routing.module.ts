import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductContainerComponent } from "./components/product-container/product-container.component";


const routes: Routes = [
    { path: '', component: ProductContainerComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ProductsRoutingModule {

}