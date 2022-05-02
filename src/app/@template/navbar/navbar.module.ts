import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './components/navbar-container/navbar-container.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarContainerComponent
  ]
})
export class NavbarModule { }
