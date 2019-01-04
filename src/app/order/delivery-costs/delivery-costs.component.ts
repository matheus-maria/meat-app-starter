import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  constructor() { }

  @Input() itens: CartItem[]
  @Input() delivery: number = 0

  ngOnInit() {
  }

  itensTotalValue = (): number => {
    return this.itens.map( item => item.value() ).reduce( (prev, value) => prev + value, 0)
  }

  shipCostTotalValue = (): number => {
    return this.delivery
  }

  totalValue = (): number => {
    return this.itensTotalValue() + this.shipCostTotalValue()
  }

}
