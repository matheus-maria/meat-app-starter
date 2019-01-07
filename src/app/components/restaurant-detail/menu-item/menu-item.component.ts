import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations:[
    trigger('menuItemAppeard', [
      state('ready',style({ opacaity: 1 })),
      transition('void => ready',[
        style({ opacity: 0, transform: 'translateY(-10px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  menuItemState: string = 'ready'

  @Input() item: MenuItem
  @Output() add = new EventEmitter()


  ngOnInit() {
  }

  emitAddEvent = () => {
    this.add.emit(this.item)
  }

}
