import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { User } from '../models/user';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {
    id: 0,
    name: 'x',
    surname: 'xxx',
    email: 'xxx',
    role: 'user',
    tokens_count: 0
  };

  private hasLoggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authStatus = this.hasLoggedIn.asObservable();

  constructor(private tokenService: TokenService, private apiService: ApiService) { }

  changeAuthStatus(value: boolean){
    this.hasLoggedIn.next(value);
  }

  setAuthUser(){
    this.apiService.authorizedUser().subscribe({
      next: (user) => {
        this.handleAuthUser(user);
      }
    });
  }

  handleAuthUser(user: any){
    this.user = user;

    console.log("Handle Auth User: " + JSON.stringify(this.user))
  }

  getUser(){
    return this.user;
  }



}
