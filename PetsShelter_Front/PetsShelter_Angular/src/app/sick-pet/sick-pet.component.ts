import { Component, Input } from '@angular/core';
import { SickPet } from '../models/sick-pet';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sick-pet',
  templateUrl: './sick-pet.component.html',
  styleUrl: './sick-pet.component.css'
})
export class SickPetComponent {

  faSackDollar = faSackDollar;

  @Input()
  pet: SickPet = {
    id: 0,
    name: 'Carlos',
    species: 'Pies',
    disease: 'Złamana noga',
    current_tokens: 0,
    required_tokens: 100,
    status: 'Aktywna',
    photo_path: './assets/PetsBgr.jpg',
  }

}
