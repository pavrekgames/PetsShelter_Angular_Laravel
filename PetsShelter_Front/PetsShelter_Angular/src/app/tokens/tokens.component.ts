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
    tokens_count: 0,
  };

  bundles: any;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

      this.apiService.authorizedUser().subscribe({
        next: (data) => {
          this.handleTokens(data);
        }
      });

      this.apiService.getbundles().subscribe({
        next: (data) => {
          this.handleAllBundles(data);
        }
      });

  }

  handleTokens(data: any){
    this.loggedUser.tokens_count = data.tokens_count;
  }

  handleAllBundles(data: any) {
    this.bundles = data;

    console.log(this.bundles);
  }

}
