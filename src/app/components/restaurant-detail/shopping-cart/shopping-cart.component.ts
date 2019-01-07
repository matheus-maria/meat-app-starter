import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../core/shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('row',[
      state('ready', style({ opacity: 1 })),
      transition('void => ready',animate('500ms 0s ease-in', keyframes([
        style({ opacity:0, transform: 'translateX(-30px)', offset:0 }),
        style({ opacity:0.8, transform: 'translateX(10px)', offset:0.8 }),
        style({ opacity:1, transform: 'translateX(0px)', offset:1 })
      ]))),
      transition('ready => void',animate('500ms 0s ease-out', keyframes([
        style({ opacity:1, transform: 'translateX(0px)', offset:0 }),
        style({ opacity:0.2, transform: 'translateX(-10px)', offset:0.2 }),
        style({ opacity:0, transform: 'translateX(30px)', offset:1 })
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  rowState: string = 'ready'

  ngOnInit() {
  }

  items = (): any[] => {
    return this.shoppingCartService.items
  }

  removeItem = (item: CartItem): void => {
    this.shoppingCartService.removeItem(item)
  }

  addItem = (item: MenuItem) => {
    this.shoppingCartService.addItem(item)
  }

  clear = (): void => {
    this.shoppingCartService.clear()
  }

  total = (): number => {
    return this.shoppingCartService.total()
  }

}
