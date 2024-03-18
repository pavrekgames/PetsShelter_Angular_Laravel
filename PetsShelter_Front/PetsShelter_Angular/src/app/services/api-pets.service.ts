import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiPetsService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

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

  getMyPets(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/my-pets', {'headers': headers});

  }

  getPetToAdopt(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/pets-to-adopt/' + id, {'headers': headers});

  }

  getPetToEdit(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/my-pets/edit/' + id, {'headers': headers});

  }

  editPet(id: any, data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>('http://127.0.0.1:8000/api/my-pets/edit/' + id, data, {'headers': headers});

  }

  editPetPhoto(id: any, data: FormData){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/my-pets/edit-photo/' + id, data, {'headers': headers});

  }

  deletePet(id: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete('http://127.0.0.1:8000/api/my-pets/delete/' + id, {'headers': headers});

  }

  getSavedPets(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/saved-pets', {'headers': headers});

  }

  checkSavedPet(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get('http://127.0.0.1:8000/api/check-saved-pet/' + id, {'headers': headers});

  }

  savePet(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post('http://127.0.0.1:8000/api/add-saved-pet/' + id, null, {'headers': headers});

  }

  deleteSavedPet(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete('http://127.0.0.1:8000/api/saved-pets/delete/' + id, {'headers': headers});

  }

}
