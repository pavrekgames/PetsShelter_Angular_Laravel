import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { ApiService } from '../services/api-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pets: any;

  constructor(private apiService: ApiService, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getNewestPets().subscribe({

      next: (data) => {
        this.spinnerService.hide();

        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }
}
