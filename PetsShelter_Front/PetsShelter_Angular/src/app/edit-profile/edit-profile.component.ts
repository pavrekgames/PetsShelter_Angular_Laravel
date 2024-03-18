import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';

declare let alertify: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  hasSubmitted: boolean = false;
  error: any = [];

  user: any;

  isChangingPassword: boolean = false;
  isPasswordsSame: boolean = true;
  passwordError: any = [];

  editProfileForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    surname: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
  });

  changePasswordForm = this.formBuilder.group({
    password: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmNewPassword: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getAuthorizedUser();
  }

  getAuthorizedUser() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleUser(data);
      },
    });
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.validateEditProfileForm();
  }

  validateEditProfileForm() {
    if (this.editProfileForm.valid) {
      this.spinnerService.show();
      const formData = this.editProfileForm.getRawValue();

      this.editProfile(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  editProfile(formData: any) {
    this.apiService.editProfile(formData).subscribe({
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

  showChangingPassword() {
    this.isChangingPassword = true;
  }

  onPasswordChange() {
    this.hasSubmitted = true;
    this.passwordError = [];

    this.checkPassword();
    this.validateChangingPassword();
  }

  validateChangingPassword() {
    if (this.changePasswordForm.valid && this.isPasswordsSame) {
      const formData = this.changePasswordForm.getRawValue();

      this.changePassword(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  changePassword(formData: any) {
    this.apiService.changePassword(formData).subscribe({
      next: (data) => {
        this.handlePasswordResponse();
      },
      error: (error) => {
        this.handlePasswordError(error);
      },
    });
  }

  checkPassword() {
    const firstPassword = this.changePasswordForm.controls['newPassword'].value;
    const repeatedPassword =
      this.changePasswordForm.controls['confirmNewPassword'].value;

    if (firstPassword == repeatedPassword) {
      this.isPasswordsSame = true;
    } else {
      this.isPasswordsSame = false;
    }
  }

  handleUser(data: any) {
    this.user = data;

    this.editProfileForm.patchValue({
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
    });
  }

  handleResponse() {
    this.router.navigate(['/']);
    alertify.success('Edytowano profil');
  }

  handleError(error: any) {
    this.error = error.error.error;

    alertify.error('Błąd edycji');
  }

  handlePasswordResponse() {
    this.router.navigate(['/']);
    alertify.success('Zmieniono hasło');
  }

  handlePasswordError(error: any) {
    this.error = error.error.error;

    alertify.error('Wystąpił problem');
  }
}
