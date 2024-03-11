import { Component } from '@angular/core';
import { Bundle } from '../models/bundle';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  faSackDollar = faSackDollar;

  bundleId: number = 0;

  bundle: Bundle = {
    id: 0,
    name: '',
    tokens_count: 0,
    price: 0,
    currency: 'pln',
  };

  constructor(){}



}
