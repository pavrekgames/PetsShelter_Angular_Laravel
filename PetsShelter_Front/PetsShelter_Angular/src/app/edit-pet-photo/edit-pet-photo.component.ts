import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiPetsService } from '../services/api-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-edit-pet-photo',
  templateUrl: './edit-pet-photo.component.html',
  styleUrl: './edit-pet-photo.component.css',
})
export class EditPetPhotoComponent {
  isMobile: boolean = false;
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editPetPhotoForm = this.formBuilder.group({
    photo: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.getPetToEdit();
    this.checkDeviceSize();
  }

  getPetToEdit() {
    this.apiPetsService.getPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handlePetToEdit(data);
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

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.validatePetPhotoForm();
  }

  validatePetPhotoForm() {
    if (this.editPetPhotoForm.valid) {
      this.spinnerService.show();

      this.editPetPhoto();
    } else {
      console.log('Form is invalid');
    }
  }

  editPetPhoto() {
    this.apiPetsService.editPetPhoto(this.petId, this.getFormData()).subscribe({
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

  onFileChange(event: any) {
    const photoToUpload = event.target.files[0];
    this.editPetPhotoForm.patchValue({ photo: photoToUpload });
    this.editPetPhotoForm.get('photo')?.updateValueAndValidity();
  }

  getFormData() {
    const formData: any = new FormData();
    formData.append('photo', this.editPetPhotoForm.get('photo')?.value);

    return formData;
  }

  cancelEditing() {
    this.router.navigate(['/my-pets']);
    alertify.warning('Anulowano zmianę zdjęcia');
  }
}
