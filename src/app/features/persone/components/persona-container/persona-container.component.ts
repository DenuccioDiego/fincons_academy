import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona-model';
import { CrudUtils } from 'src/app/shared/utils/crud-utils';

@Component({
  selector: 'fin-persona-container',
  templateUrl: './persona-container.component.html',
  styleUrls: ['./persona-container.component.css']
})
export class PersonaContainerComponent implements OnInit {

  ngOnInit(): void {
  }
  personaList: Persona[] = [];

  constructor() {
    this.buildPersonaArray();
  }

  private buildPersonaArray(): void {
    this.personaList = [
      {
        nome: 'Roberto',
        cognome: 'Rossi',
        sesso: 'M'
      },
      {
        nome: 'Roberta',
        cognome: 'Viola',
        sesso: 'F'
      },
      {
        nome: 'Alberto',
        cognome: 'Tomba',
        sesso: 'M'
      },
    ]
  }

  detailSelectionHandler(persona: Persona): void {
    console.table(persona);
    console.log("detail persona" + persona);
  }

  /* Chiamo un metodo statico che si trova in utils/crud-utils importando la classe del metodo */
  deleteSelectionHandler(persona: Persona): void {
    this.personaList = CrudUtils.deleteFromArray(persona, this.personaList);
    console.table(persona);
  }

  /* Cancellare un elemento da un array trovato il suo indice  
   deleteFunction(object: Object, args: any[]) {
    const indexOfObject = args.findIndex((e) => {
      return e === object;
    });
    args.splice(indexOfObject, 1);
  } */

  /* Cancellare un elemento da un array usando map() che resistuisce un array senza l'elemento selezionato 
   deleteFunction(object: Object, args: any[]) {
    return args.map(el => el !== object);
  } */

}
