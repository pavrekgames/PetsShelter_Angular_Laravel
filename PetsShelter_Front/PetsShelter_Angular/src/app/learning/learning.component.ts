import { Component, OnInit, Pipe, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';
import { ApiPetsService } from '../services/api-pets.service';
import { Observable, map, tap } from 'rxjs';
import { ModalsService } from '../services/modals.service';
import { DynamicDirective } from '../directives/dynamic.directive';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent {

  isModal: boolean = false;

  @ViewChild(DynamicDirective, { static: true }) dynamicDirective!: DynamicDirective;

  constructor(
    private apiPetsService: ApiPetsService,
    private spinnerService: SpinnerService,
    private modalsService: ModalsService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiPetsService.getPetsToAdopt().subscribe({
      next: (data) => {
        this.spinnerService.hide();

        console.log(data);

        const dataArray: any = data;
        dataArray.map((pet) => {
          pet.id += 10;
          console.log(pet.id);
        });

        const greeting = '   Hello world!   ';

        let number = 4;
        number += number;
        console.log("number:", number);

        console.log(greeting.trim());
        // Expected output: "Hello world!";

      },
    });

  }

  openModal(modalTemplate: TemplateRef<any>){
    console.log("Open Modal!!!");

    const containerRef = this.dynamicDirective.viewContainerRef;

    this.modalsService.open(containerRef, modalTemplate, {content: 'Czy na pewno chcesz usunąć zwierzę o imieniu Mruczek?', title: 'Usuwanie zwierzęcia', size: 'lg'}).subscribe(action => {
      if(action === 'confirm'){
        console.log('Action Open Modal');
      }else{
        console.log('Action Close Modal');
      }

    });
  }

}
