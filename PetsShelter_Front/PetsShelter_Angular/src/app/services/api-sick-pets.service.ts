import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiSickPetsService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  addSickPet(data: FormData){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'add-sick-pet', data, {'headers': headers});
  }

  getSickPets(){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'sick-pets', {'headers': headers});

  }

  getSickPetToEdit(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.get(this.API_URL + 'sick-pets/edit/' + id, {'headers': headers});

  }

  editSickPet(id: any, data: any){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.put<any>(this.API_URL + 'sick-pets/edit/' + id, data, {'headers': headers});

  }

  editSickPetPhoto(id: any, data: FormData){
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.post(this.API_URL + 'sick-pets/edit-photo/' + id, data, {'headers': headers});

  }

  deleteSickPet(id: any){

    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set('Authorization', "Bearer " + token);

    return this.http.delete(this.API_URL + 'sick-pets/delete/' + id, {'headers': headers});

  }


}

