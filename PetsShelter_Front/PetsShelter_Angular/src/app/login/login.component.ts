import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  hasSubmitted: boolean = false;
  error = null;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService,
    private tokenService: TokenService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = null;

    if (this.loginForm.valid) {
      const formData = this.loginForm.getRawValue();
      this.spinner.show();

      this.apiService.login(formData).subscribe({
        next: (data) => {

          setTimeout(() => {
            this.spinner.hide();
          }, 500);

          this.handleResponse(data);
        },
        error: (error) => {

          setTimeout(() => {
            this.spinner.hide();
          }, 500);

          this.handleError(error);
          console.log(this.error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  handleResponse(data: any) {
    this.tokenService.handleToken(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigate(['/']);
    alertify.success('Zostałeś zalogowany');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Błąd logowania');
  }
}
