import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaModule } from './features/persone/persona.module';
import { ProductModule } from './features/products/product.module';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './@template/navbar/navbar.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ProductModule,
    PersonaModule,
    NavbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
