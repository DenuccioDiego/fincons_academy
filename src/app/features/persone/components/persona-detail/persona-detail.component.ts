import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona-model';

@Component({
  selector: 'fin-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() detail: Persona;
  @Input() detailEdit: string = "";
  @Input() modEdit: boolean = false;

  @Output() detailSelection: EventEmitter<Persona> = new EventEmitter<Persona>();
  @Output() editSelection: EventEmitter<Persona> = new EventEmitter<Persona>();
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

  editSelectionHandler(): void {
    console.log("primo step");
    this.editSelection.emit(this.detail);
  }

}
