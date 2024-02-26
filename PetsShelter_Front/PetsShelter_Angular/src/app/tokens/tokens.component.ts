import { ApiService } from './../services/api-service';
import { Component } from '@angular/core';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';


declare let alertify: any;

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.css'
})
export class TokensComponent {

  faSackDollar = faSackDollar;

  loggedUser: User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    role: '',
    tokens_count: 0,
  };

  smallBundleTokens: number = 100;
  mediumBundleTokens: number = 250;
  bigBundleTokens: number = 600;

  smallBundlePrice: number = 49.99;
  mediumBundlePrice: number = 69.99;
  bigBundlePrice: number = 99.99;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

      this.apiService.authorizedUser().subscribe({
        next: (data) => {
          this.handleTokens(data);
        }
      });
  }

  handleTokens(data: any){
    this.loggedUser.tokens_count = data.tokens_count;
  }

  topUpTokensWindow(tokensCount: number) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Doładowanie żetonów');
    newConfirmBox.setMessage('Czy na pewno chcesz doładować ' + tokensCount + ' żetonów?');

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
        this.topUpTokens(tokensCount);
      }
    });
}

topUpTokens(tokens: number){
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
