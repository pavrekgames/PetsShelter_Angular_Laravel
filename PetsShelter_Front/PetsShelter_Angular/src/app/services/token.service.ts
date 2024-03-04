import { Injectable } from '@angular/core';
import { LocalstorageService } from '../LocalStorage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private localStorage: LocalstorageService) {}

  handleToken(token: any) {
    this.setToken(token);
  }

  setToken(token: any) {
    //return localStorage.setItem('token', token);
    return this.localStorage.setItem('token', token);
  }

  getToken() {
    //return localStorage.getItem('token');

    return this.localStorage.getItem('token');
  }

  removeToken() {
    //return localStorage.removeItem('token');
    this.localStorage.removeItem('token');
  }

  isTokenValid() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === 'http://127.0.0.1:8000/api/login' ? true : false;
      }
    }
    return false;
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decodeToken(payload);
  }

  decodeToken(token: any) {
    return JSON.parse(window.atob(token));
  }

  loggedIn() {
    return this.isTokenValid();
  }

  getTokenValue() {
    const token = this.getToken();

    return token;
  }

  isTokenExpired() {
    const token = this.getToken();

    if (token !== null) {
      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      return expiry * 1000 > Date.now();
    }else{
      return true;
    }

  }
}
