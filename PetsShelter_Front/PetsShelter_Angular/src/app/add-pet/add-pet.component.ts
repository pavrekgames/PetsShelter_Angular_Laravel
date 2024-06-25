import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css',
})
export class AddPetComponent implements OnInit {
  hasSubmitted: boolean = false;

  userId: number = 1;

  error: any = [];

  addPetForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required, Validators.minLength(3)]],
    race: ['', [Validators.required, Validators.minLength(3)]],
    size: ['Mały', [Validators.required]],
    description: [''],
    photo: [null, [Validators.required]],
    userId: [this.userId, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.validatePetForm();
  }

  validatePetForm() {
    if (this.addPetForm.valid) {
      this.spinnerService.show();

      this.addPet();
    } else {
      console.log('Form is invalid');
    }
  }

  addPet() {
    console.log(this.getFormData());

    this.apiPetsService.addPet(this.getFormData()).subscribe({
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

  handleResponse() {
    this.router.navigate(['/']);
    alertify.success('Dodano zwierzę');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  onFileChange(event: any) {
    const photoToUpload = event.target.files[0];
    this.addPetForm.patchValue({ photo: photoToUpload });
    this.addPetForm.get('photo')?.updateValueAndValidity();
  }

  getFormData() {
    const formData: any = new FormData();
    formData.append('name', this.addPetForm.get('name')?.value);
    formData.append('species', this.addPetForm.get('species')?.value);
    formData.append('race', this.addPetForm.get('race')?.value);
    formData.append('size', this.addPetForm.get('size')?.value);
    formData.append('description', this.addPetForm.get('description')?.value);
    formData.append('photo', this.addPetForm.get('photo')?.value);

    return formData;
  }
}
