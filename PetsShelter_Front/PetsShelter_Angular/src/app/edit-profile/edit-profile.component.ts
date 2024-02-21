import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  hasSubmitted: boolean = false;
  isPasswordsSame: boolean = true;
  error: any = [];

  user: any;

  editProfileForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    surname: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
      this.apiService.authorizedUser().subscribe({
        next: (data) => {
          this.handleUser(data);
        }
      });

  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    //this.checkPassword();

    if (this.editProfileForm.valid) {
      const formData = this.editProfileForm.getRawValue();

      this.apiService.register(formData).subscribe({
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

  checkPassword() {
    const firstPassword = this.editProfileForm.controls['password'].value;
    const repeatedPassword =
      this.editProfileForm.controls['confirmPassword'].value;

    if (firstPassword == repeatedPassword) {
      this.isPasswordsSame = true;
    } else {
      this.isPasswordsSame = false;
    }
  }

  handleUser(data: any){
    this.user = data;

    this.editProfileForm.patchValue({
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email
    });
  }

  handleResponse() {
    this.router.navigate(['/']);
    alertify.success('Edytowano profil');
  }

  handleError(error: any) {
    this.error = error.error.error; // before was error.error.erros
    console.log('Mam błąd: ' + JSON.stringify(error));
    console.log('Mam do przesłania błąd: ' + JSON.stringify(this.error));

    alertify.error('Błąd edycji');
  }

}
