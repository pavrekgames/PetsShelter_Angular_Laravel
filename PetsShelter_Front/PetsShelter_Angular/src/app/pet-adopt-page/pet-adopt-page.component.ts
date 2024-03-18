import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiPetsService } from '../services/api-pets.service';
import { ApiMessagesService } from '../services/api-messages.service';

declare let alertify: any;

@Component({
  selector: 'app-pet-adopt-page',
  templateUrl: './pet-adopt-page.component.html',
  styleUrl: './pet-adopt-page.component.css',
})
export class PetAdoptPageComponent {
  isMobile: boolean = false;

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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver,
    private apiPetsService: ApiPetsService,
    private apiMessagessService: ApiMessagesService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.getPetToAdopt();
    this.checkSavedPet();
    this.checkDeviceSize();
  }

  getPetToAdopt() {
    this.apiPetsService.getPetToAdopt(this.petId).subscribe({
      next: (data: any) => {
        this.handlePetToAdopt(data);
        console.log(data);
      },
    });
  }

  checkSavedPet() {
    this.apiPetsService.checkSavedPet(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSavedPet(data);
      },
    });
  }

  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
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

    this.apiPetsService.savePet(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSavePetSuccess(data);
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
    this.apiMessagessService.createConversation(this.pet).subscribe({
      next: (data: any) => {
        this.handleConversationSuccess(data);
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

    if (this.loggedUser.id == this.pet.user_id) {
      this.isLoggedUserPet = true;
    } else {
      this.isLoggedUserPet = false;
    }
  }
}
