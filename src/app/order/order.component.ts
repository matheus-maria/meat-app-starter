import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from '../core/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  emailPattern: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern: any = /^[0-9]*$/

  orderForm: FormGroup

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: 'MON' },
    { label: "Cartão de Débido", value: 'DEB' },
    { label: "Cartão de Crédito", value: 'CRD' }
  ]

  ngOnInit() {
    this.orderForm = this.formBuilder.group({

      // Inputs Values from your Form

      name: this.formBuilder.control('',[ 
        Validators.required 
      ]),
      email: this.formBuilder.control('',[  
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      emailConfirmation: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      adress: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      number: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]),
      optional: this.formBuilder.control('',[
        Validators.required
      ]),
      paymentOption: this.formBuilder.control('',[
        Validators.required
      ])

    }, {
      validator: OrderComponent.equaltsTo
    })
  }  

  static equaltsTo = (group: AbstractControl): {[key:string]: boolean} => {
    const email = group.get('email')
    const emailConfirmarion = group.get('emailConfirmation')

    if (!email || !emailConfirmarion)
      return undefined
    else {
      if(email.value != emailConfirmarion.value && emailConfirmarion.dirty)
        return { emailsNotMatch: true }
      else
        return undefined
    }
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
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
      })
  }
}
