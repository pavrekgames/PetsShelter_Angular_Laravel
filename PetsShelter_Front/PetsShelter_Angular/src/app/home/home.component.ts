import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pets: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNewestPets().subscribe({
      next: (data) => {
        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }
}
