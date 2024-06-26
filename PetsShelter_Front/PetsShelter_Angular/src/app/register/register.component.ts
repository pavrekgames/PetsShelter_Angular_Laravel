import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';

declare let alertify: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  hasSubmitted: boolean = false;
  isPasswordsSame: boolean = true;
  error: any = [];

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    surname: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    this.checkPassword();
    this.validateRegisterForm();
  }

  validateRegisterForm() {
    if (this.registerForm.valid && this.isPasswordsSame) {
      this.spinnerService.show();
      const formData = this.registerForm.getRawValue();

      this.register(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  register(formData: any) {
    this.apiService.register(formData).subscribe({
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

  checkPassword() {
    const firstPassword = this.registerForm.controls['password'].value;
    const repeatedPassword =
      this.registerForm.controls['confirmPassword'].value;

    if (firstPassword == repeatedPassword) {
      this.isPasswordsSame = true;
    } else {
      this.isPasswordsSame = false;
    }
  }

  handleResponse() {
    this.router.navigate(['/login']);
    alertify.success('Zostałeś zarejestrowany');
  }

  handleError(error: any) {
    this.error = error.error.error;

    alertify.error('Błąd rejestracji');
  }
}
