import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaContainerComponent } from './components/persona-container/persona-container.component';
import { PersonaDetailComponent } from './components/persona-detail/persona-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonaContainerComponent,
    PersonaDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    PersonaContainerComponent,
  ]
})
export class PersonaModule { }
