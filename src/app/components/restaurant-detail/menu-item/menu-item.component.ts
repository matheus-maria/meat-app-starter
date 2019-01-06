import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input() item: MenuItem
  @Output() add = new EventEmitter()


  ngOnInit() {
  }

  emitAddEvent = () => {
    this.add.emit(this.item)
  }

}
