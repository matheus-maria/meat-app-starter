import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: 'MON' },
    { label: "Cartão de Débido", value: 'DEB' },
    { label: "Cartão de Crédito", value: 'CRD' }
  ]

  ngOnInit() {
  }

}
