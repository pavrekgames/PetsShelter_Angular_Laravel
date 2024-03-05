import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';

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
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getPetsToAdopt().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
        console.log(data);
      },
    });
  }

  handleAllPets(data: any) {
    this.pets = data;
  }
}
