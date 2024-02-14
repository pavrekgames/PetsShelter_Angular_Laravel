import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hasLoggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authStatus = this.hasLoggedIn.asObservable();

  constructor(private tokenService: TokenService) { }

  changeAuthStatus(value: boolean){
    this.hasLoggedIn.next(value);
  }

}
