import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-pets-adopt-page',
  templateUrl: './pets-adopt-page.component.html',
  styleUrl: './pets-adopt-page.component.css'
})
export class PetsAdoptPageComponent {

  pets: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPetsToAdopt().subscribe({
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
