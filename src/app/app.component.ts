import { Component } from '@angular/core';
import { MenuEnum } from './@template/navbar/enums/menu-enum';

@Component({
  selector: 'fin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMenuDashboard: boolean;
  showMenuPeople: boolean;
  showMenuProducts: boolean;

  constructor() {
    this.showMenuDashboard = false;
    this.showMenuPeople = false;
    this.showMenuProducts = false;
  }

  menuSelectionHandler(menuIndex: MenuEnum): void {

    if (menuIndex === MenuEnum.WELCOME) {
      this.showMenuDashboard = true;
      this.showMenuPeople = false;
      this.showMenuProducts = false;
    } else if (menuIndex === MenuEnum.PEOPLE) {
      this.showMenuDashboard = false;
      this.showMenuPeople = true
      this.showMenuProducts = false;
    } else if (menuIndex === MenuEnum.PRODUCTS) {
      this.showMenuDashboard = false;
      this.showMenuPeople = false;
      this.showMenuProducts = true;
    }

  }
}
