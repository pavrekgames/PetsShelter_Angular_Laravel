import { Component } from '@angular/core';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.css'
})
export class TokensComponent {

  faSackDollar = faSackDollar;

  smallBundleTokens: number = 100;
  mediumBundleTokens: number = 250;
  bigBundleTokens: number = 600;

  smallBundlePrice: number = 49.99;
  mediumBundlePrice: number = 69.99;
  bigBundlePrice: number = 99.99;

}
