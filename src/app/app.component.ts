import { Component } from '@angular/core';

@Component({
  selector: 'fin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myText: string = "";

  variabile: string = '';

  typeList: Array<string> = ['Prodotti', 'Persone'];

  showChange(type: string): void {
    if (this.variabile === type) {
      this.variabile = "";
    }
    else if (type === 'Prodotti') {
      this.variabile = type;
    } else if (type === 'Persone') {
      this.variabile = type;
    }
  }

}
