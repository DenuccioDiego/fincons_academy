import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductModule) },
  //{ path: 'persone', loadChildren: () => import('./features/persone/persone.module').then(m => m.PersonaModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
