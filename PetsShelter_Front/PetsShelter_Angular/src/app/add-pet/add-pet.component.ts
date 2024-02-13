import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css'
})
export class AddPetComponent implements OnInit {
  hasSubmitted: boolean = false;

  addPetForm = this.formBuilder.group({
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

    if (this.addPetForm.valid) {
      this.http
        .post(
          'http://127.0.0.1:8000/api/add-pet',
          this.addPetForm.getRawValue(),
          {withCredentials: true}
        )
        .subscribe(() => {
          this.router.navigate(['/']);
          alertify.success('Dodano z sukcesem');
        });
    }else{
      console.log("Form is invalid");
    }
  }

}
