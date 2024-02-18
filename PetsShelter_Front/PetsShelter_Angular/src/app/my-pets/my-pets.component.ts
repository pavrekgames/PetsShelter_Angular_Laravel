import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css'
})
export class MyPetsComponent {

  pets: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMyPets().subscribe({
      next: (data: any) => {
        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }

}
