import { Component } from '@angular/core';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';
import { RoutingService } from '../services/routing.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiPetsService } from '../services/api-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css',
})
export class MyPetsComponent {
  isMobile: boolean = false;

  pets: Array<any> = [];

  constructor(
    private routingService: RoutingService,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiPetsService.getMyPets().subscribe({
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

    this.apiPetsService.deletePet(petId).subscribe({
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
