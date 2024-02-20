import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Pet } from '../models/pet';
import { Router } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css'
})
export class MyPetsComponent {

  pets: any;

  constructor(private apiService: ApiService, private router: Router,) {}

  ngOnInit(): void {
    this.apiService.getMyPets().subscribe({
      next: (data: any) => {
        this.handleNewestPets(data);
        console.log(data);
      },
    });
  }

  handleNewestPets(data: any) {
    this.pets = data;
  }

  /*deletePetWindow(petId: any){
    alertify.confirm("Czy na pewno chcesz usunąć zwierzę?",
  function(){

    //alertify.success('Tak');
  },
  function(){
   // alertify.error('Nie');
  }).set('labels', {ok:'Tak', cancel:'Nie'});
  } */

  deletePetWindow(petId: any){


  }

  deletePet(petId: any){
   /* this.apiService.deletePet(0).subscribe({
      next: (data) => {
        this.handleResponse();
        console.log(data);
      },
      error: (error) => {
        this.handleError();
        console.log(error);
      },
    }); */

    alertify.success(petId);

  }

  handleResponse() {
    this.router.navigate(['/my-pets']);
    alertify.success('Usunąłeś zwierzę');
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }

}
