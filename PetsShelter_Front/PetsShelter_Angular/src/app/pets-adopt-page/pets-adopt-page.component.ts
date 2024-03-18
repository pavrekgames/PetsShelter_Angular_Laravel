import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';

@Component({
  selector: 'app-pets-adopt-page',
  templateUrl: './pets-adopt-page.component.html',
  styleUrl: './pets-adopt-page.component.css',
})
export class PetsAdoptPageComponent {
  searchText: any;

  pets: any;

  page: number = 1;
  petsPerPage: number = 4;

  constructor(
    private spinnerService: SpinnerService,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getPetToAdopt();
  }

  getPetToAdopt() {
    this.apiPetsService.getPetsToAdopt().subscribe({
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
