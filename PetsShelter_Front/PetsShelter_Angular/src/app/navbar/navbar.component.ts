import { Component, OnInit } from '@angular/core';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api-service';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private apiServie: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.authStatus.subscribe((value) => {
      this.isLoggenIn = value;
    });

    if(this.isLoggenIn){
      this.apiServie.authorizedUser().subscribe(res => {

        console.log("User Data " + JSON.stringify(res));
      });
    }

  }

  logout() {
    this.router.navigate(['/']);
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    alertify.success('Zostałeś wylogowany');
  }
}
