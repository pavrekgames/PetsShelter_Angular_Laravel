import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiTokensService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  transferTokens(petId: any, data: any) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post(this.API_URL + 'transfer-tokens/' + petId, data, {
      headers: headers,
    });
  }

  getbundles() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get(this.API_URL + 'bundles', { headers: headers });
  }

  getbundle(id: any) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get(this.API_URL + 'bundles/' + id, { headers: headers });
  }

  createPayIntent(data: any) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post(this.API_URL + 'payment-intent', data, {
      headers: headers,
    });
  }

  storePayment(data: any) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post(this.API_URL + 'store-payment', data, {
      headers: headers,
    });
  }
}
