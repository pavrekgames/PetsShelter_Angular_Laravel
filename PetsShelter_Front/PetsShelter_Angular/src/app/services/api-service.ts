import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  register(data: any) {
    return this.http.post(this.API_URL + 'register', data);
  }

  login(data: any) {
    return this.http.post(this.API_URL + 'login', data);
  }

  authorizedUser() {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'me', null, {'headers': headers});
  }

  editProfile(data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post<any>(this.API_URL + 'edit-profile', data, {'headers': headers});

  }

  changePassword(data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post<any>(this.API_URL + 'change-password', data, {'headers': headers});

  }

  resetPassword(data: any){
    return this.http.post(this.API_URL + 'reset-password', data);
  }

  getUsers(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'users', {'headers': headers});

  }

  deleteUser(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'users/delete/' + id, {'headers': headers});

  }

}
