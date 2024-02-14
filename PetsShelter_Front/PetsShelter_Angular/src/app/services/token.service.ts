import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  handleToken(token: any) {
    this.setToken(token);
    console.log(this.isTokenValid());
  }

  setToken(token: any) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  isTokenValid() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if(payload){
        return (payload.iss === "http://127.0.0.1:8000/api/login")? true : false;
      }
    }
    return false;
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decodeToken(payload);
  }

  decodeToken(token: any) {
    return JSON.parse(atob(token));
  }
}
