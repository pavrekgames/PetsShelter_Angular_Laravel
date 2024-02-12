import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hasSubmitted: boolean = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
  }

  onSubmit(){
    this.hasSubmitted = true;

    if (this.loginForm.valid) {
   /*   this.http
        .post(
          'http://127.0.0.1:8000/api/login',
          this.loginForm.getRawValue()
        )
        .subscribe(() => {
          this.router.navigate(['/']);
          alertify.success('Zostałeś zalogowany');
        }); */
    }else{
      console.log("Form is invalid");
    }
  }


  }

