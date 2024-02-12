import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  hasSubmitted: boolean = false;
  isPasswordsSame: boolean = false;

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
    //this.isPasswordsSame = false;
  }

  onSubmit() {
    this.hasSubmitted = true;

    this.checkPassword();

    if (this.registerForm.valid && this.isPasswordsSame) {
      this.http
        .post(
          'http://127.0.0.1:8000/api/register',
          this.registerForm.getRawValue()
        )
        .subscribe(() => {
          this.router.navigate(['/login']);
        });
    }else{
      console.log("Form is invalid");
    }
  }

  checkPassword(){
    const firstPassword = this.registerForm.controls['password'].value;
    const repeatedPassword = this.registerForm.controls['confirmPassword'].value;

    if(firstPassword == repeatedPassword){
      this.isPasswordsSame = true;
    }else{
      this.isPasswordsSame = false;
    }

  }


}
