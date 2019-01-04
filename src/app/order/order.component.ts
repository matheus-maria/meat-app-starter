import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: 'MON' },
    { label: "Cartão de Débido", value: 'DEB' },
    { label: "Cartão de Crédito", value: 'CRD' }
  ]

  ngOnInit() {
  }  

  cartItems = (): CartItem[] => {
    return this.orderService.cartItems()
  }

  increaseQtd = (item: CartItem): void => {
    this.orderService.increaseQtd(item)
  }

  decreaseQtd = (item: CartItem): void => {
    this.orderService.decreaseQtd(item)
  }

  remove = (item: CartItem):void => {
    this.orderService.remove(item)
  }

  deliveryValue = () => {
    return this.orderService.deliveryValue()
  }

  checkOrder = (order: Order) => {
    order.orderItens = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity,item.menuItem.id))

    this.orderService.checkOrder(order)
      .subscribe((orderId: string): void => {
        console.log(`Compra Concluida: ${orderId}`)
        this.orderService.clear()
      })
    console.log(order)
  }

}
