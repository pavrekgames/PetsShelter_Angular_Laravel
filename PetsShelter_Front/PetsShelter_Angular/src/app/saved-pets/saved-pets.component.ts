import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-saved-pets',
  templateUrl: './saved-pets.component.html',
  styleUrl: './saved-pets.component.css',
})
export class SavedPetsComponent {
  isMobile: boolean = false;

  pets: Array<any> = [];

  constructor(
    private apiService: ApiService,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getSavedPets().subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleNewestPets(data);
        console.log(data);
      },
    });

    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });

  }

  handleNewestPets(data: any) {
    this.pets = data;
  }

  deletePetWindow(petId: any, petName: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Usuwanie zapisanego zwierzęcia');
    newConfirmBox.setMessage(
      'Czyn a pewno chcesz usunąć zapisane zwierzę o imieniu ' + petName + ' ?'
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
        this.deleteSavedPet(petId);
      }
    });
  }

  deleteSavedPet(petId: any) {
    this.spinnerService.show();

    this.apiService.deleteSavedPet(petId).subscribe({
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
    window.location.reload();
    alertify.success('Usunąłeś zapisane zwierzę');
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
