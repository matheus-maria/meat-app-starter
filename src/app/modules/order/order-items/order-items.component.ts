import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../components/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  constructor() { }

  @Input() items: CartItem[]

  @Output() increaseQtd = new EventEmitter<CartItem>()
  @Output() decreaseQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  ngOnInit() {
  }

  emitIncreaseQtd = (item: CartItem) => {
    this.increaseQtd.emit(item)
  }

  emitDecreaseQtd = (item: CartItem) => {
    this.decreaseQtd.emit(item)
  }

  emitRemove = (item: CartItem) => {
    this.remove.emit(item)
  }

}
