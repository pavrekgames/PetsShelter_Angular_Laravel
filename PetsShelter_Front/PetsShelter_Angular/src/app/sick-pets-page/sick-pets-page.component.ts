import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-pets-sick-page',
  templateUrl: './sick-pets-page.component.html',
  styleUrl: './sick-pets-page.component.css'
})
export class SickPetsPageComponent {

  pets: any;

  page: number = 1;
  petsPerPage: number = 4;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getSickPets().subscribe({
      next: (data) => {
        this.handleAllPets(data);
        console.log(data);
      },
    });
  }

  handleAllPets(data: any) {
    this.pets = data;
  }

}
