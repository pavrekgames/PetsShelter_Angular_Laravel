import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pets: any;

  constructor(
    private spinnerService: SpinnerService,
    private apiPetsService: ApiPetsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiPetsService.getNewestPets().subscribe({
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
