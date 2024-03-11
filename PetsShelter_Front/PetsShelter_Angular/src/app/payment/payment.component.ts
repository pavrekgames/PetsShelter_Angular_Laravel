import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Bundle } from '../models/bundle';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import  { NgForm } from "@angular/forms"

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  faSackDollar = faSackDollar;

  bundleId: number = 0;

  bundle: Bundle = {
    id: 0,
    name: '',
    tokens_count: 0,
    price: 0,
    currency: 'pln',
  };

  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe: any;
  loading = false;
  confirmation: any;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string = '';


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private cd: ChangeDetectorRef,
    private stripeService: AngularStripeService
  ) {}

  ngOnInit(): void {
    this.bundleId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.apiService.getbundle(this.bundleId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleBundle(data);
        console.log(data);
      },
    });

  }

  ngAfterViewInit() {
    this.stripeService.setPublishableKey('pk_test_2syov9fTMRwOxYG97AAXbOgt008X6NL46o').then(
      stripe=> {
        this.stripe = stripe;
    const elements = stripe.elements();
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
    });
  }

  handleBundle(data: any) {
    this.bundle = data;
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({error} : {error:any}) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = '';
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Success!', token);
    }
  }

}
