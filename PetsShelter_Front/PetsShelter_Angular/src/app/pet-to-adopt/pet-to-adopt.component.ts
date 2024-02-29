import { Component, Input, Output } from '@angular/core';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet-to-adopt',
  templateUrl: './pet-to-adopt.component.html',
  styleUrl: './pet-to-adopt.component.css'
})
export class PetToAdoptComponent {

  @Input()
pet: Pet = {
  id: 0,
  name: 'Carlos',
  species: 'Pies',
  race: 'kundel',
  size: 'średni',
  description: 'brak',
  photo_path: './assets/PetsBgr.jpg',
  user_id: 0
}

}
