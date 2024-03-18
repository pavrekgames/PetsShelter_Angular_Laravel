import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrl: './edit-pet.component.css',
})
export class EditPetComponent {
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editPetForm = this.formBuilder.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    species: ['', [Validators.required, Validators.minLength(3)]],
    race: ['', [Validators.required, Validators.minLength(3)]],
    size: ['Mały', [Validators.required]],
    description: [''],
    userId: [this.userId, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.apiPetsService.getPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handlePetToAdopt(data);
      },
    });
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.validateEditPetForm();
  }

  validateEditPetForm() {
    if (this.editPetForm.valid) {
      this.spinnerService.show();

      this.editPet();
    } else {
      console.log('Form is invalid');
    }
  }

  editPet() {
    this.apiPetsService.editPet(this.petId, this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      },
    });
  }

  handlePetToAdopt(data: any) {
    this.pet = data;

    this.editPetForm.patchValue({
      id: this.pet.id,
      name: this.pet.name,
      species: this.pet.species,
      race: this.pet.race,
      size: this.pet.size,
      description: this.pet.description,
      userId: this.userId,
    });
  }

  handleResponse() {
    this.router.navigate(['/my-pets']);
    alertify.success('Edytowano zwierzę');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  getFormData() {
    const formData = this.editPetForm.getRawValue();

    return formData;
  }

  cancelEditing() {
    this.router.navigate(['/my-pets']);
    alertify.warning('Anulowano edycję');
  }
}
