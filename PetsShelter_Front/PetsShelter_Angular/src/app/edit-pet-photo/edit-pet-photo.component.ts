import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { ActivatedRoute, Router } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-edit-pet-photo',
  templateUrl: './edit-pet-photo.component.html',
  styleUrl: './edit-pet-photo.component.css'
})
export class EditPetPhotoComponent {
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editPetPhotoForm = this.formBuilder.group({
    photo: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;

    this.apiService.getPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.handlePetToEdit(data);
        console.log(data);
      },
    });
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    if (this.editPetPhotoForm.valid) {

      const formData = this.editPetPhotoForm.getRawValue();
      console.log("Raw Values: " + JSON.stringify(formData));

      this.apiService.editPetPhoto(this.petId, this.getFormData()).subscribe({
        next: (data) => {
          this.handleResponse();
          console.log(data);
        },
        error: (error) => {
          this.handleError(error);
          console.log(this.error);
        },
      });

    } else {
      console.log('Form is invalid');
    }
  }

  handleResponse() {
    this.router.navigate(['/my-pets']);
    alertify.success('Zmieniono zdjęcie');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  handlePetToEdit(data: any) {
    this.pet = data;

  }

  onFileChange(event: any){
    console.log(event.target.files[0]);
    const photoToUpload = event.target.files[0];
    this.editPetPhotoForm.patchValue({photo: photoToUpload});
    this.editPetPhotoForm.get('photo')?.updateValueAndValidity();
  }

  getFormData(){
    const formData: any = new FormData();
    formData.append('photo', this.editPetPhotoForm.get('photo')?.value);

    return formData;
  }

  cancelEditing(){
    this.router.navigate(['/my-pets']);
    alertify.warning('Anulowano zmianę zdjęcia');
  }


}
