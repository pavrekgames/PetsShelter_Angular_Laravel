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

declare let alertify: any;

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
    intent_id: 0
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
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

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.apiService.createPayIntent(this.bundle).subscribe({
          next: (data) => {
            console.log(data);
            this.bundlePayment(this.bundle.id);
          },
        });
      }
    });
  }

  bundlePayment(id: any) {
    this.router.navigate(['tokens-bundles/payment/' + id]);
  }

  topUpTokens(tokens: number) {
    this.loggedUser.tokens_count += tokens;

    this.apiService.topUpTokens(this.loggedUser).subscribe({
      next: (data) => {
        this.handleResponse();
        console.log(data);
      },
      error: (error) => {
        this.handleError();
        console.log(error);
      },
    });
  }

  handleResponse() {
    //this.router.navigate(['/my-pets']);
    alertify.success('Doładowano żetony');
    window.location.reload();
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
