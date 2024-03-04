import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { ApiService } from '../services/api-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pets: any;

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();

    this.apiService.getNewestPets().subscribe({

      next: (data) => {

        setTimeout(() => {
          this.spinner.hide();
        }, 1000);

        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }
}
