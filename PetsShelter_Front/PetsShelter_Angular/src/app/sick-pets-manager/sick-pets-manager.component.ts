import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-sick-pets-manager',
  templateUrl: './sick-pets-manager.component.html',
  styleUrl: './sick-pets-manager.component.css'
})
export class SickPetsManagerComponent {

  faPlus = faPlus;

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
