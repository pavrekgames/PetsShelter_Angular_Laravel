import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css'
})
export class AddPetComponent implements OnInit {
  hasSubmitted: boolean = false;
  userId: number = 1;
  error: any = [];

  addPetForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required, Validators.minLength(3)]],
    race: ['', [Validators.required, Validators.minLength(3)]],
    size: ['Mały', [Validators.required]],
    description: [''],
    photoPath: [, [Validators.required]],
    userId: [this.userId, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];

    if (this.addPetForm.valid) {
      const formData = this.addPetForm.getRawValue();
      console.log("Raw Values: " + JSON.stringify(formData));

      this.apiService.addPet(formData).subscribe({
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

  handleResponse() {
    this.router.navigate(['/']);
    alertify.success('Dodano zwierzę');
  }

  handleError(error: any) {
    this.error = error.error.error;
    console.log('Mam błąd: ' + JSON.stringify(error));
    console.log('Mam do przesłania błąd: ' + JSON.stringify(this.error));
    alertify.error('Wystąpił problem!');
  }

}
