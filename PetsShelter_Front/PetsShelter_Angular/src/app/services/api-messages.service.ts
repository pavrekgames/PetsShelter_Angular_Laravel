import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiMessagesService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  createConversation(data: any) {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'api/create-conversation', data, {'headers': headers});
  }

  getConversations(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'conversations', {'headers': headers});

  }

  getConversation(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'conversations/' + id, {'headers': headers});

  }

  createMessage(data: any) {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'create-message', data, {'headers': headers});
  }

  getMessages(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'messages/' + id, {'headers': headers});

  }

  getUnreadMessagesCount(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'messages-count', {'headers': headers});

  }

  getUnreadConversationMessagesCount(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'messages-count/' + id, {'headers': headers});

  }

}
