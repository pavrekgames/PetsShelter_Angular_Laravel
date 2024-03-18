import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTokensService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  transferTokens(petId: any, data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/transfer-tokens/' + petId, data, {'headers': headers});

  }

  getbundles(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/bundles', {'headers': headers});

  }

  getbundle(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/bundles/' + id, {'headers': headers});

  }

  createPayIntent(data: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/payment-intent', data, {'headers': headers});

  }

  storePayment(data: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/store-payment', data, {'headers': headers});

  }


}
