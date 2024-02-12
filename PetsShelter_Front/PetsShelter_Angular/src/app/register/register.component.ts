import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {

  hasSubmitted: boolean = false;

  registerForm = this.formBuilder.group({
    name: ['',[ Validators.required, Validators.maxLength(25)]],
    surname: ['',[ Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[ Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //this.hasSubmitted = false;
  }

  onSubmit(){
    this.hasSubmitted = true;
  }

}
