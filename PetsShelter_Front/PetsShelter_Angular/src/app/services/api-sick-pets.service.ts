import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSickPetsService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

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


}

