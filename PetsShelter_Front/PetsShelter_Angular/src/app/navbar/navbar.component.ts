import { Component, OnInit } from '@angular/core';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ApiService } from '../services/api-service';
import { User } from '../models/user';

declare let alertify: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  faShieldDog = faShieldDog;
  faUser = faUser;
  faPlus = faPlus;
  faSackDollar = faSackDollar;
  faEnvelope = faEnvelope;

  isLoggenIn: boolean = false;

  loggedUser: User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    role: '',
    tokensCount: 0,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.authService.authStatus.subscribe((value) => {
      this.isLoggenIn = value;
    });

    if(this.isLoggenIn){
      this.apiService.authorizedUser().subscribe({
        next: (data) => {
          this.handleUser(data);
        }
      });
    }

  }

  logout() {
    this.router.navigate(['/']);
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    alertify.success('Zostałeś wylogowany');
  }

  handleUser(data: any){
    this.loggedUser.id = data.id;
    this.loggedUser.name = data.name;
    this.loggedUser.surname = data.surname;
    this.loggedUser.email = data.email;
    this.loggedUser.role = data.role;
    this.loggedUser.tokensCount = data.tokens_count;
  }

}
