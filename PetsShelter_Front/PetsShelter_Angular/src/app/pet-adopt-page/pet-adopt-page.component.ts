import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pet-adopt-page',
  templateUrl: './pet-adopt-page.component.html',
  styleUrl: './pet-adopt-page.component.css'
})
export class PetAdoptPageComponent {

  pet: any;
  petId: any;

  faHeart = faHeart;
  faEnvelope = faEnvelope;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.petId = this.route.snapshot.params.id;

    this.apiService.getPetToAdopt(this.petId).subscribe({
      next: (data: any) => {
        this.handlePetToAdopt(data);
        console.log(data);
      },
    });
  }

  handlePetToAdopt(data: any) {
    this.pet = data;
  }

}
