import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { ApiSickPetsService } from '../services/api-sick-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-edit-sick-pet',
  templateUrl: './edit-sick-pet.component.html',
  styleUrl: './edit-sick-pet.component.css',
})
export class EditSickPetComponent {
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editSickPetForm = this.formBuilder.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    species: ['', [Validators.required, Validators.minLength(3)]],
    disease: ['', [Validators.required, Validators.minLength(3)]],
    required_tokens: [1, [Validators.required, Validators.min(1)]],
    status: ['Aktywne', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private apiSickPetsService: ApiSickPetsService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.getSickPetToEdit();
  }

  getSickPetToEdit() {
    this.apiSickPetsService.getSickPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSickPet(data);
      },
    });
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.validateSickPetForm();
  }

  validateSickPetForm() {
    if (this.editSickPetForm.valid) {
      this.spinnerService.show();
    } else {
      console.log('Form is invalid');
    }
  }

  editSickPet() {
    this.apiSickPetsService
      .editSickPet(this.petId, this.getFormData())
      .subscribe({
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

  handleSickPet(data: any) {
    this.pet = data;

    this.editSickPetForm.patchValue({
      id: this.pet.id,
      name: this.pet.name,
      species: this.pet.species,
      disease: this.pet.disease,
      required_tokens: this.pet.required_tokens,
      status: this.pet.status,
    });
  }

  handleResponse() {
    this.router.navigate(['/sick-pets-manager']);
    alertify.success('Edytowano chore zwierzę');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  getFormData() {
    const formData = this.editSickPetForm.getRawValue();

    return formData;
  }

  cancelEditing() {
    this.router.navigate(['/sick-pets-manager']);
    alertify.warning('Anulowano edycję');
  }
}
