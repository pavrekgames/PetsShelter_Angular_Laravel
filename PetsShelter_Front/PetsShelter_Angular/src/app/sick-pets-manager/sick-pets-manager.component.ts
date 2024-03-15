import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';
import { RoutingService } from '../services/routing.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-sick-pets-manager',
  templateUrl: './sick-pets-manager.component.html',
  styleUrl: './sick-pets-manager.component.css',
})
export class SickPetsManagerComponent {
  isMobile: boolean = false;

  faPlus = faPlus;

  pets: any;

  page: number = 1;
  petsPerPage: number = 4;

  constructor(
    private apiService: ApiService,
    private routingService: RoutingService,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getSickPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
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

  handleAllPets(data: any) {
    this.pets = data;
  }

  deleteSickPetWindow(petId: any, petName: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Usuwanie chorego zwierzęcia');
    newConfirmBox.setMessage(
      'Czy na pewno chcesz usunąć chore zwierzę o imieniu ' + petName + ' ?'
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
        this.deleteSickPet(petId);
      }
    });
  }

  deleteSickPet(petId: any) {
    this.spinnerService.show();

    this.apiService.deleteSickPet(petId).subscribe({
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
    alertify.success('Usunąłeś chore zwierzę');
    const url = '/sick-pets-manager';
    this.routingService.redirectTo(url);
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
