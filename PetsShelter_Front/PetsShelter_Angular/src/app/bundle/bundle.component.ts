import { Component, Input } from '@angular/core';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { Bundle } from '../models/bundle';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { ApiService } from '../services/api-service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { StripeService } from '../services/stripe.service';
import { ApiTokensService } from '../services/api-tokens.service';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrl: './bundle.component.css',
})
export class BundleComponent {
  faSackDollar = faSackDollar;

  loggedUser: User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    role: '',
    tokens_count: 0,
  };

  @Input()
  bundle: Bundle = {
    id: 0,
    name: 'Mały pakiet',
    tokens_count: 100,
    price: 49.99,
    currency: 'pln',
    intent_id: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private stripeService: StripeService,
    private apiTokensService: ApiTokensService
  ) {}

  ngOnInit(): void {
    this.getUserTokensFromApi();
  }

  getUserTokensFromApi() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleTokens(data);
      },
    });
  }

  handleTokens(data: any) {
    this.loggedUser.tokens_count = data.tokens_count;
  }

  topUpTokensWindow(tokensCount: number) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Doładowanie żetonów');
    newConfirmBox.setMessage(
      'Czy na pewno chcesz doładować ' + tokensCount + ' żetonów?'
    );

    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center',
    });

    newConfirmBox.setButtonLabels('Tak', 'Nie');

    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.createPayIntent();
      }
    });
  }

  createPayIntent() {
    this.apiTokensService.createPayIntent(this.bundle).subscribe({
      next: (data) => {
        console.log(data);
        this.bundlePayment(this.bundle.id, data);
      },
    });
  }

  bundlePayment(id: any, intent: any) {
    this.stripeService.setIntent(intent);

    this.router.navigate(['tokens-bundles/payment/' + id]);
  }
}
