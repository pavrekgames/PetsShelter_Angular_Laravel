import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  constructor(private http: HttpClient, private tokenService: TokenService) {}

 // user

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




  // tokens

  topUpTokens(data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>('http://127.0.0.1:8000/api/top-up-tokens', data, {'headers': headers});

  }

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


  // sick pets


  addSickPet(data: FormData){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/add-sick-pet', data, {'headers': headers});
  }

  getSickPets(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/sick-pets', {'headers': headers});

  }

  getSickPetToEdit(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/sick-pets/edit/' + id, {'headers': headers});

  }

  editSickPet(id: any, data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>('http://127.0.0.1:8000/api/sick-pets/edit/' + id, data, {'headers': headers});

  }

  editSickPetPhoto(id: any, data: FormData){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/sick-pets/edit-photo/' + id, data, {'headers': headers});

  }

  deleteSickPet(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete('http://127.0.0.1:8000/api/sick-pets/delete/' + id, {'headers': headers});

  }

  // messages


  createConversation(data: any) {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/create-conversation', data, {'headers': headers});
  }

  getConversations(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/conversations', {'headers': headers});

  }

  getConversation(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/conversations/' + id, {'headers': headers});

  }

  createMessage(data: any) {

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/create-message', data, {'headers': headers});
  }

  getMessages(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/messages/' + id, {'headers': headers});

  }

  getUnreadMessagesCount(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/messages-count', {'headers': headers});

  }

  getUnreadConversationMessagesCount(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/messages-count/' + id, {'headers': headers});

  }



}
