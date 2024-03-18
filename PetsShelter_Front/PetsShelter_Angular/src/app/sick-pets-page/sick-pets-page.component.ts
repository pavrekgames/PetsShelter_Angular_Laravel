import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { ApiSickPetsService } from '../services/api-sick-pets.service';

@Component({
  selector: 'app-pets-sick-page',
  templateUrl: './sick-pets-page.component.html',
  styleUrl: './sick-pets-page.component.css',
})
export class SickPetsPageComponent {
  searchText: any;

  pets: any;

  page: number = 1;
  petsPerPage: number = 5;

  constructor(
    private spinnerService: SpinnerService,
    private apiSickPetsService: ApiSickPetsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getSickPets();
  }

  getSickPets() {
    this.apiSickPetsService.getSickPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
      },
    });
  }

  handleAllPets(data: any) {
    this.pets = data;
  }
}
