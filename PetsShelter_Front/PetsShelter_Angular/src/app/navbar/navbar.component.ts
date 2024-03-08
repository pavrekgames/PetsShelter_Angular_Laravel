import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
import { MessagesService } from '../services/messages.service';

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
  isTokenExpired: boolean = false;

  @Input()
  messagesCount: number = 0;

  loggedUser: User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    role: '',
    tokens_count: 0,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private apiService: ApiService,
    private messagesService: MessagesService
  ) {
    this.messagesService.messagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe((value) => {
      this.isLoggenIn = value;
    });

    if (this.isLoggenIn) {
      this.apiService.authorizedUser().subscribe({
        next: (data) => {
          this.handleUser(data);
        },
      });

      this.apiService.getUnreadMessagesCount().subscribe({
        next: (data) => {
          this.getUnreadMessagesCount(data);
        },
      });

      this.checkToken();

      this.messagesService.messagesCountObs.subscribe(
        (messagesCount) => (this.messagesCount = messagesCount)
      );
    }
  }

  logout() {
    this.router.navigate(['/']);
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    alertify.success('Zostałeś wylogowany');
  }

  handleUser(data: any) {
    this.loggedUser.id = data.id;
    this.loggedUser.name = data.name;
    this.loggedUser.surname = data.surname;
    this.loggedUser.email = data.email;
    this.loggedUser.role = data.role;
    this.loggedUser.tokens_count = data.tokens_count;

    this.authService.setAuthUser();
  }

  checkToken() {
    this.isTokenExpired = this.tokenService.isTokenExpired();
    console.log('Token expired: ' + this.isTokenExpired);

    if (this.isTokenExpired) {
      this.logout();
    }
  }

  getUnreadMessagesCount(data: any) {
    console.log('Messages count' + JSON.stringify(data));
    this.messagesCount = data.messagesCount;
  }
}
