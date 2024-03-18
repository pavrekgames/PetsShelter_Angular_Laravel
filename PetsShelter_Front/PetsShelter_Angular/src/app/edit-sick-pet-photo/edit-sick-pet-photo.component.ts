import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiSickPetsService } from '../services/api-sick-pets.service';

declare let alertify: any;

@Component({
  selector: 'app-edit-sick-pet-photo',
  templateUrl: './edit-sick-pet-photo.component.html',
  styleUrl: './edit-sick-pet-photo.component.css',
})
export class EditSickPetPhotoComponent {
  isMobile: boolean = false;
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editSickPetPhotoForm = this.formBuilder.group({
    photo: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver,
    private apiSickPetsService: ApiSickPetsService
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.getSickPetToEdit();
    this.checkDeviceSize();
  }

  getSickPetToEdit() {
    this.apiSickPetsService.getSickPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSickPetToEdit(data);
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

    this.validateSickPetPhotoForm();
  }

  validateSickPetPhotoForm() {
    if (this.editSickPetPhotoForm.valid) {
      this.spinnerService.show();

      this.editSickPetPhoto();
    } else {
      console.log('Form is invalid');
    }
  }

  editSickPetPhoto() {
    this.apiSickPetsService
      .editSickPetPhoto(this.petId, this.getFormData())
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

  handleResponse() {
    this.router.navigate(['/sick-pets-manager']);
    alertify.success('Zmieniono zdjęcie');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  handleSickPetToEdit(data: any) {
    this.pet = data;
  }

  onFileChange(event: any) {
    const photoToUpload = event.target.files[0];
    this.editSickPetPhotoForm.patchValue({ photo: photoToUpload });
    this.editSickPetPhotoForm.get('photo')?.updateValueAndValidity();
  }

  getFormData() {
    const formData: any = new FormData();
    formData.append('photo', this.editSickPetPhotoForm.get('photo')?.value);

    return formData;
  }

  cancelEditing() {
    this.router.navigate(['/sick-pets-manager']);
    alertify.warning('Anulowano zmianę zdjęcia');
  }
}
