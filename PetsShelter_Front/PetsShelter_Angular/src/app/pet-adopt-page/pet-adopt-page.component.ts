import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';

declare let alertify: any;

@Component({
  selector: 'app-pet-adopt-page',
  templateUrl: './pet-adopt-page.component.html',
  styleUrl: './pet-adopt-page.component.css',
})
export class PetAdoptPageComponent {
  pet: any;
  petId: any;
  loggedUser: any;

  isLoggedUserPet: boolean = false;
  isPetSaved: boolean = false;
  saveButtonText: string = 'Zapisz';
  savedButtonText: string = 'Zapisano';
  currentButtonText: string = 'Zapisz';

  faHeart = faHeart;
  faEnvelope = faEnvelope;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.apiService.getPetToAdopt(this.petId).subscribe({
      next: (data: any) => {
        this.handlePetToAdopt(data);
        console.log(data);
      },
    });

    this.apiService.checkSavedPet(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSavedPet(data);
        console.log(data);
      },
    });

  }

  handlePetToAdopt(data: any) {
    this.pet = data;

    this.checkLoggedUserPet();

  }

  handleSavedPet(data: any) {
    if (this.petId == data.pet_id) {
      this.isPetSaved = true;
      this.currentButtonText = this.savedButtonText;
    } else {
      this.isPetSaved = false;
      this.currentButtonText = this.saveButtonText;
    }
  }

  savePet() {
    this.spinnerService.show();

    this.apiService.savePet(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSavePetSuccess(data);
        console.log(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleSavePetError();
      },
    });
  }

  handleSavePetSuccess(data: any) {
    this.isPetSaved = true;
    this.currentButtonText = this.savedButtonText;
    alertify.success('Zapisano zwierzę');
  }

  handleSavePetError() {
    alertify.error('Wystąpił problem!');
  }

  createConversation() {
    this.apiService.createConversation(this.pet).subscribe({
      next: (data: any) => {
        this.handleConversationSuccess(data);
        console.log(data);
      },
      error: (error) => {
        this.handleConversationError();
      },
    });
  }

  handleConversationSuccess(data: any) {
    const conversationId = data.id;

    this.router.navigate(['/messages/' + conversationId]);
  }

  handleConversationError() {
    alertify.error('Wystąpił problem!');
  }

  checkLoggedUserPet() {
    this.loggedUser = this.authService.getUser();

    if(this.loggedUser.id == this.pet.user_id){
      this.isLoggedUserPet = true;
    }else{
      this.isLoggedUserPet = false;
    }
  }
}
