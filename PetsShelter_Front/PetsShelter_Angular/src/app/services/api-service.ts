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

  addPet(data: FormData){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/add-pet', data, {'headers': headers});
  }

  getNewestPets(){
    return this.http.get('http://127.0.0.1:8000/api/newest-pets');
  }

  getPetsToAdopt(){
    return this.http.get('http://127.0.0.1:8000/api/pets-to-adopt');
  }

}
