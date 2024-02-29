import { Component, Input } from '@angular/core';
import { SickPet } from '../models/sick-pet';
import { TokensCount } from '../models/tokens-count';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-sick-pet',
  templateUrl: './sick-pet.component.html',
  styleUrl: './sick-pet.component.css',
})
export class SickPetComponent {
  faSackDollar = faSackDollar;

  userTokensCount: number = 0;
  isValid: boolean = false;

  tokensCount: TokensCount = {
    tokens_count: 1,
  };

  @Input()
  pet: SickPet = {
    id: 0,
    name: 'Carlos',
    species: 'Pies',
    disease: 'Złamana noga',
    current_tokens: 0,
    required_tokens: 100,
    status: 'Aktywna',
    photo_path: './assets/PetsBgr.jpg',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleUserTokens(data);
      },
    });
  }

  transferTokensWindow() {
    this.validate();

    if (this.isValid) {
      const newConfirmBox = new ConfirmBoxInitializer();

      newConfirmBox.setTitle('Przelanie żetonów');
      newConfirmBox.setMessage(
        'Czy na pewno chcesz przelać ' +
          this.tokensCount.tokens_count +
          ' żetonów?'
      );

      newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.SUCCESS,
        animationIn: AppearanceAnimation.BOUNCE_IN,
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: 'center',
      });

      newConfirmBox.setButtonLabels('Tak', 'Nie');

      // Simply open the popup and observe button click
      newConfirmBox.openConfirmBox$().subscribe((resp) => {
        if (resp.success) {
          this.transferTokens(this.tokensCount, this.pet.id);
        }
      });
    }
  }

  transferTokens(tokens: any, petId: any) {
    this.apiService.transferTokens(petId, tokens).subscribe({
      next: (data) => {
        this.handleResponse();
        console.log(data);
      },
      error: (error) => {
        this.handleError();
        console.log(error);
      },
    });
  }

  handleResponse() {
    alertify.success('Przelano żetony');
    window.location.reload();
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }

  validate() {
    this.isValid =
      this.tokensCount.tokens_count >= 1 &&
      this.tokensCount.tokens_count <= this.userTokensCount;

    if(this.tokensCount.tokens_count > this.userTokensCount){
      this.tokensCountWarningWindow();
    }
  }

  tokensCountWarningWindow() {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Transfer żetonów');
    newConfirmBox.setMessage('Nie masz tyle żetonów!');

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.WARNING,
    animationIn: AppearanceAnimation.BOUNCE_IN,
    animationOut: DisappearanceAnimation.BOUNCE_OUT,
    buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('Zamknij', '');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe(resp => {
      if(resp.clickedButtonID){
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}


  handleUserTokens(data: any){
    this.userTokensCount = data.tokens_count;
  }

}
