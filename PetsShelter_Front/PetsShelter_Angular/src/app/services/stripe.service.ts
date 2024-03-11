import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  intent: any;

  constructor() { }

  setIntent(data: any){
    this.intent = data;
  }

  getIntent(){

  }

}
