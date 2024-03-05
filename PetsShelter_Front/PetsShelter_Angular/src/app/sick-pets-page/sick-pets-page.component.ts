import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';

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
    private apiService: ApiService,
    private spinnerService: SpinnerService
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
  }

  handleAllPets(data: any) {
    this.pets = data;
  }
}
