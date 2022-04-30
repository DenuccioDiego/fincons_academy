import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonSelectorComponent } from "./components/common-selector/common-selector.component";

@NgModule({
    declarations: [
        CommonSelectorComponent,
    ],
    imports: [
        CommonModule //modulo del @angular/core da importare in tutti i moduli secondari
    ],
    exports: [
        CommonSelectorComponent
    ]
})
export class SharedModule {

}