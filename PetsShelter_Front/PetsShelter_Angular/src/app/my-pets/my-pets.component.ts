import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Pet } from '../models/pet';
import { Router } from '@angular/router';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';

declare let alertify: any;

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css',
})
export class MyPetsComponent {
  pets: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getMyPets().subscribe({
      next: (data: any) => {
        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }

  deletePetWindow(petId: any, petName: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Usuwanie zwierzęcia');
    newConfirmBox.setMessage('Czyn a pewno chcesz usunąć zwierzę o imieniu ' + petName + ' ?');

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
        this.deletePet(petId);
      }
    });
  }

  deletePet(petId: any) {
     this.apiService.deletePet(petId).subscribe({
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
    this.router.navigate(['/my-pets']);
    alertify.success('Usunąłeś zwierzę');
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
