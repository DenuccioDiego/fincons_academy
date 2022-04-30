import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona-model';

@Component({
  selector: 'fin-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  modEdit: boolean = false;

  ngOnInit(): void {
  }

  @Input() detail: Persona;

  @Output() detailSelection: EventEmitter<Persona> = new EventEmitter<Persona>();
  @Output() deleteSelection: EventEmitter<Persona> = new EventEmitter<Persona>();

  constructor() {
    this.detail = {} as Persona;
  }

  detailSelectionHandler(): void {
    this.detailSelection.emit(this.detail);
  }

  deleteSelectionHandler(): void {
    this.deleteSelection.emit(this.detail);
  }

  editOnOff() {
    if (this.modEdit) {
      this.modEdit = false;
    } else {
      this.modEdit = true;
    }
  }

}
