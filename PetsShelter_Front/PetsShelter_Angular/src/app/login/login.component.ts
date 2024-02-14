import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hasSubmitted: boolean = false;
  error: any = [];

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
  }

  onSubmit(){
    this.hasSubmitted = true;

    if (this.loginForm.valid) {
      const formData = this.loginForm.getRawValue();

      this.apiService.login(formData).subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );
    }else{
      console.log("Form is invalid");
    }
  }

  handleError(error: any) {
    this.error = error.error.erros;
  }

  }

