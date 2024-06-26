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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiTokensService } from '../services/api-tokens.service';

declare let alertify: any;

@Component({
  selector: 'app-sick-pet',
  templateUrl: './sick-pet.component.html',
  styleUrl: './sick-pet.component.css',
})
export class SickPetComponent {
  isMobile: boolean = false;

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

  constructor(
    private apiService: ApiService,
    private breakPointService: BreakpointObserver,
    private apiTokensService: ApiTokensService
  ) {}

  ngOnInit(): void {
    this.getUsersToken();
    this.checkDeviceSize();
  }

  getUsersToken() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleUserTokens(data);
      },
    });
  }

  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
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

      newConfirmBox.openConfirmBox$().subscribe((resp) => {
        if (resp.success) {
          this.transferTokens(this.tokensCount, this.pet.id);
        }
      });
    }
  }

  transferTokens(tokens: any, petId: any) {
    this.apiTokensService.transferTokens(petId, tokens).subscribe({
      next: (data) => {
        this.handleResponse();
      },
      error: (error) => {
        this.handleError();
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

    if (this.tokensCount.tokens_count > this.userTokensCount) {
      this.tokensCountWarningWindow();
    }
  }

  tokensCountWarningWindow() {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Transfer żetonów');
    newConfirmBox.setMessage('Nie masz tyle żetonów!');

    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.WARNING,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center',
    });

    newConfirmBox.setButtonLabels('Zamknij', '');

    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID) {
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
  }

  handleUserTokens(data: any) {
    this.userTokensCount = data.tokens_count;
  }
}
