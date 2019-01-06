import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../core/shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

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