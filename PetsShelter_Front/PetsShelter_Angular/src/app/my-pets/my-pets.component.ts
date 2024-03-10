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
import { SpinnerService } from '../services/spinner.service';
import { RoutingService } from '../services/routing.service';

declare let alertify: any;

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css',
})
export class MyPetsComponent {
  pets: Array<any> = [];

  constructor(
    private apiService: ApiService,
    private routingService: RoutingService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getMyPets().subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
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
    newConfirmBox.setMessage(
      'Czyn a pewno chcesz usunąć zwierzę o imieniu ' + petName + ' ?'
    );

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
    this.spinnerService.show();

    this.apiService.deletePet(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
        console.log(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
        console.log(error);
      },
    });
  }

  handleResponse() {
    alertify.success('Usunąłeś zwierzę');

    const url = '/my-pets';
    this.routingService.redirectTo(url);
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
