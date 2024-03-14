import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-edit-sick-pet-photo',
  templateUrl: './edit-sick-pet-photo.component.html',
  styleUrl: './edit-sick-pet-photo.component.css'
})
export class EditSickPetPhotoComponent {
  isMobile: boolean = false;
  hasSubmitted: boolean = false;

  userId: number = 1;
  petId: any;
  pet: any;

  error: any = [];

  editSickPetPhotoForm = this.formBuilder.group({
    photo: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.apiService.getSickPetToEdit(this.petId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleSickPetToEdit(data);
        console.log(data);
      },
    });

    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });

  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    if (this.editSickPetPhotoForm.valid) {
      this.spinnerService.show();
      const formData = this.editSickPetPhotoForm.getRawValue();
      console.log("Raw Values: " + JSON.stringify(formData));

      this.apiService.editSickPetPhoto(this.petId, this.getFormData()).subscribe({
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
    alertify.success('Zmieniono zdjęcie');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Wystąpił problem!');
  }

  handleSickPetToEdit(data: any) {
    this.pet = data;

  }

  onFileChange(event: any){
    console.log(event.target.files[0]);
    const photoToUpload = event.target.files[0];
    this.editSickPetPhotoForm.patchValue({photo: photoToUpload});
    this.editSickPetPhotoForm.get('photo')?.updateValueAndValidity();
  }

  getFormData(){
    const formData: any = new FormData();
    formData.append('photo', this.editSickPetPhotoForm.get('photo')?.value);

    return formData;
  }

  cancelEditing(){
    this.router.navigate(['/sick-pets-manager']);
    alertify.warning('Anulowano zmianę zdjęcia');
  }

}
