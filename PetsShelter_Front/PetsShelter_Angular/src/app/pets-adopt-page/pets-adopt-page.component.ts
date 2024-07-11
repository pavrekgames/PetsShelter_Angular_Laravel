import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pets-adopt-page',
  templateUrl: './pets-adopt-page.component.html',
  styleUrl: './pets-adopt-page.component.css',
})
export class PetsAdoptPageComponent {
  searchText: any;

  pets: any;
  filteredPets: any;

  page: number = 1;
  petsPerPage: number = 4;

  selectedSize: string = '';

  constructor(
    private spinnerService: SpinnerService,
    private apiPetsService: ApiPetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getPetToAdopt();

    this.route.queryParamMap.subscribe((params) => {
      const size = params.get('size');

      if (this.selectedSize) {
        this.filteredPets = this.pets.filter((pet) => {
          return pet.size === size;
        });
      }
    });
  }

  getPetToAdopt() {
    this.apiPetsService.getPetsToAdopt().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
      },
    });
  }

  handleAllPets(data: any) {
    this.pets = data;
    this.filteredPets = this.pets;
  }

  filterBySize() {
    const queryParams: any = {};

    if (this.selectedSize) {
      queryParams.size = this.selectedSize;
    } else {
      queryParams.size = this.selectedSize;
      this.filteredPets = this.pets;
    }

    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
