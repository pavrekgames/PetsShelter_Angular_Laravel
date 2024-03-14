import { PaymentComponent } from './../payment/payment.component';
import { Component, Input, Output, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-pet-to-adopt',
  templateUrl: './pet-to-adopt.component.html',
  styleUrl: './pet-to-adopt.component.css',
})
export class PetToAdoptComponent implements OnInit {
  isMobile: boolean = false;

  @Input()
  pet: Pet = {
    id: 0,
    name: 'Carlos',
    species: 'Pies',
    race: 'kundel',
    size: 'średni',
    description: 'brak',
    photo_path: './assets/PetsBgr.jpg',
    user_id: 0,
  };

  constructor(private breakPointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
        console.log('Is Mobile!!!');
      }else{
        this.isMobile = false;
        console.log('Not Mobile!!!');
      }
    });
  }
}
