import { Component } from '@angular/core';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiPetsService } from '../services/api-pets.service';

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
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getSavedPets();
    this.checkDeviceSize();
  }

  getSavedPets() {
    this.apiPetsService.getSavedPets().subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleNewestPets(data);
      },
    });
  }

  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      } else {
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

    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center',
    });

    newConfirmBox.setButtonLabels('Tak', 'Nie');

    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteSavedPet(petId);
      }
    });
  }

  deleteSavedPet(petId: any) {
    this.spinnerService.show();

    this.apiPetsService.deleteSavedPet(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
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
