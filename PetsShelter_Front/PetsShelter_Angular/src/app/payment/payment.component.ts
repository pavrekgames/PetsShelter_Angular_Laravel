import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { Bundle } from '../models/bundle';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import { NgForm } from '@angular/forms';
import { StripeService } from '../services/stripe.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  isMobile: boolean = false;

  faSackDollar = faSackDollar;

  bundleId: number = 0;

  bundle: Bundle = {
    id: 0,
    name: '',
    tokens_count: 0,
    price: 0,
    currency: 'pln',
    intent_id: '',
  };

  intent: any;

  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  stripe: any;
  loading = false;
  confirmation: any;
  clSecret: string = '';

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: SpinnerService,
    private changeDetector: ChangeDetectorRef,
    private angularStripeService: AngularStripeService,
    private stripeService: StripeService,
    private breakPointService: BreakpointObserver
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

    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });

    this.intent = this.stripeService.getIntent();
  }

  ngAfterViewInit() {
    this.angularStripeService
      .setPublishableKey(
        'pk_test_51OrcDGEWRNv9J4W30uKuSTxXolrFz4Yxfrxqp2ndhzRB7fYauRp8umR0o8DFQ6HAKu8cfyMCDl7JmLUuiK4pLqJI002Qyu35zf'
      )
      .then((stripe) => {
        console.log('Stripe: ' + stripe);
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

  onChange({ error }: { error: any }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = '';
    }
    this.changeDetector.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await this.stripe.createToken(this.card);
    this.clSecret = this.intent.intent.client_secret;
    this.bundle.intent_id = this.intent.intent.id;
    console.log('IntentID: ' + this.bundle.intent_id);

    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Success!', token);

      this.spinnerService.show();
      this.apiService.storePayment(this.bundle).subscribe({
        next: (data: any) => {
          this.spinnerService.hide();
          this.handlePaymentResponse(data);
          console.log(data);
        },
        error: (error) => {
          this.spinnerService.hide();
          this.handlePaymentError();
          console.log(error);
        },
      });
    }
  }

  handlePaymentResponse(data: any) {
    this.stripe
      .confirmCardPayment(this.clSecret, {
        receipt_email: '',
        payment_method: {
          card: this.card,
          billing_details: {
            name: '',
            email: '',
          },
        },
      })
      .then(
         (res) => {
          if (res.paymentIntent && res.paymentIntent.status === 'succeeded') {
            alertify.success('Doładowano żetony');
            this.router.navigate(['/tokens-bundles']);
          } else {
            const errorCode = res.error.message;
            alertify.error(errorCode);
          }
        });
  }

  handlePaymentError() {
    alertify.error('Wystąpił problem!');
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
}
