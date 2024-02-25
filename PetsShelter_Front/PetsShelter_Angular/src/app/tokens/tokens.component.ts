import { ApiService } from './../services/api-service';
import { Component } from '@angular/core';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user';

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
    tokensCount: 0,
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
    this.loggedUser.tokensCount = data.tokens_count;
  }

  topUpTokens(tokens: number){
    this.loggedUser.tokensCount += tokens;

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
    //window.location.reload();
    alertify.success('Doładowano żetony');
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }


}
