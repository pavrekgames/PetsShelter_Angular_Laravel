import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  constructor(private http: HttpClient, private tokenService: TokenService) {}

  register(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/register', data);
  }

  login(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

  authorizedUser() {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/me', null, {'headers': headers});
  }

  editProfile(data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>('http://127.0.0.1:8000/api/edit-profile', data, {'headers': headers});

  }

  changePassword(data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>('http://127.0.0.1:8000/api/change-password', data, {'headers': headers});

  }

  resetPassword(data: any){
    return this.http.post('http://127.0.0.1:8000/api/reset-password', data);
  }

  getUsers(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/users', {'headers': headers});

  }

  deleteUser(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete('http://127.0.0.1:8000/api/users/delete/' + id, {'headers': headers});

  }

}
