import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { ApiSickPetsService } from '../services/api-sick-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-add-sick-pet',
  templateUrl: './add-sick-pet.component.html',
  styleUrl: './add-sick-pet.component.css'
})
export class AddSickPetComponent {

  hasSubmitted: boolean = false;

  error: any = [];

  addSickPetForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required, Validators.minLength(3)]],
    disease: ['', [Validators.required, Validators.minLength(3)]],
    required_tokens: [1, [Validators.required, Validators.min(1)]],
    status: ['Aktywne', [Validators.required]],
    photo: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService,
    private apiSickPetsService: ApiSickPetsService
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    if (this.addSickPetForm.valid) {
      this.spinnerService.show();
      const formData = this.addSickPetForm.getRawValue();
      console.log("Raw Values: " + JSON.stringify(formData));

      this.apiSickPetsService.addSickPet(this.getFormData()).subscribe({
        next: (data) => {
          this.spinnerService.hide();
          this.handleResponse();
          console.log(data);
        },
        error: (error) => {
          this.spinnerService.hide();
          this.handleError(error);
          console.log(this.error);
        },
      });

    } else {
      console.log('Form is invalid');
    }
  }

  handleResponse() {
    this.router.navigate(['/sick-pets-manager']);
    alertify.success('Dodano chore zwierzę');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  onFileChange(event: any){
    console.log(event.target.files[0]);
    const photoToUpload = event.target.files[0];
    this.addSickPetForm.patchValue({photo: photoToUpload});
    this.addSickPetForm.get('photo')?.updateValueAndValidity();
  }

  getFormData(){
    const formData: any = new FormData();
    formData.append('name', this.addSickPetForm.get('name')?.value);
    formData.append('species', this.addSickPetForm.get('species')?.value);
    formData.append('disease', this.addSickPetForm.get('disease')?.value);
    formData.append('required_tokens', this.addSickPetForm.get('required_tokens')?.value);
    formData.append('status', this.addSickPetForm.get('status')?.value);
    formData.append('photo', this.addSickPetForm.get('photo')?.value);

    return formData;
  }


}
