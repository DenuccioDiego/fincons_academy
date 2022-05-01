import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuEnum } from '../../enums/menu-enum';


@Component({
  selector: 'fin-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() menuSelection: EventEmitter<MenuEnum> = new EventEmitter<MenuEnum>();

  manageMenu(index: number): void {
    this.menuSelection.emit(index);
  }
}
