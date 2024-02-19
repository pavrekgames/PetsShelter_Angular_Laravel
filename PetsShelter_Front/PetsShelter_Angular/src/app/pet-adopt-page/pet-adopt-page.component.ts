import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-pet-adopt-page',
  templateUrl: './pet-adopt-page.component.html',
  styleUrl: './pet-adopt-page.component.css'
})
export class PetAdoptPageComponent {

  pet: any;

  constructor(private apiService: ApiService) {}

}
