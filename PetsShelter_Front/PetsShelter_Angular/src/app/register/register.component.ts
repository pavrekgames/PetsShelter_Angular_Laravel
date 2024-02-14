import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { error } from 'console';

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
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
    //this.isPasswordsSame = false;
  }

  onSubmit() {
    this.hasSubmitted = true;

    this.checkPassword();

    if (this.registerForm.valid && this.isPasswordsSame) {
      const formData = this.registerForm.getRawValue();

      this.apiService.register(formData).subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );

     console.log(this.error);

     /* this.http
        .post(
          'http://127.0.0.1:8000/api/register',
          this.registerForm.getRawValue()
        )
        .subscribe(() => {
          this.router.navigate(['/login']);
          alertify.success('Zostałeś zarejestrowany');
        }); */

    } else {
      console.log('Form is invalid');
    }
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

  handleError(error: any) {
    this.error = error.error.erros;
  }

}
