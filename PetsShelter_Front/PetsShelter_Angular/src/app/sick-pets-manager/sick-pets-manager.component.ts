import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';

declare let alertify: any;

@Component({
  selector: 'app-sick-pets-manager',
  templateUrl: './sick-pets-manager.component.html',
  styleUrl: './sick-pets-manager.component.css'
})
export class SickPetsManagerComponent {

  faPlus = faPlus;

  pets: any;

  page: number = 1;
  petsPerPage: number = 4;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getSickPets().subscribe({
      next: (data) => {
        this.handleAllPets(data);
        console.log(data);
      },
    });
  }

  handleAllPets(data: any) {
    this.pets = data;
  }

  deleteSickPetWindow(petId: any, petName: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Usuwanie chorego zwierzęcia');
    newConfirmBox.setMessage('Czyn a pewno chcesz usunąć chore zwierzę o imieniu ' + petName + ' ?');

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('Tak', 'Nie');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteSickPet(petId);
      }
    });
  }

  deleteSickPet(petId: any) {
    this.apiService.deleteSavedPet(petId).subscribe({
     next: (data) => {
       this.handleResponse();
       console.log(data);
     },
     error: (error) => {
       this.handleError();
       console.log(error);
     },
   });
 }

 handleResponse() {
  window.location.reload();
  alertify.success('Usunąłeś chore zwierzę');
}

handleError() {
  alertify.error('Wystąpił problem!');
}


}
