import { Component } from '@angular/core';

@Component({
  selector: 'app-pets-sick-page',
  templateUrl: './sick-pets-page.component.html',
  styleUrl: './sick-pets-page.component.css'
})
export class SickPetsPageComponent {

  pets: any;

  page: number = 1;
  petsPerPage: number = 4;

}
