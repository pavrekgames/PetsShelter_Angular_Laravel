import { Component, Input } from '@angular/core';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Bundle } from '../models/bundle';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrl: './bundle.component.css'
})
export class BundleComponent {

  faSackDollar = faSackDollar;

  @Input()
  bundle: Bundle = {
    id: 0,
    name: 'Mały pakiet',
    tokens_count: 100,
    price: 49.99,
    currency: 'pln'
  };

  topUpTokensWindow(tokens: number){

  }

}
