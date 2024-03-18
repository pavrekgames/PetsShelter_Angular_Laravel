import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Bundle } from '../models/bundle';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import { NgForm } from '@angular/forms';
import { StripeService } from '../services/stripe.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiTokensService } from '../services/api-tokens.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: SpinnerService,
    private changeDetector: ChangeDetectorRef,
    private angularStripeService: AngularStripeService,
    private stripeService: StripeService,
    private breakPointService: BreakpointObserver,
    private apiTokensService: ApiTokensService
  ) {}

  ngOnInit(): void {
    this.bundleId = this.route.snapshot.params.id;
    this.spinnerService.show();

    this.getBundle();
    this.checkDeviceSize();

    this.intent = this.stripeService.getIntent();
  }

  getBundle() {
    this.apiTokensService.getbundle(this.bundleId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleBundle(data);
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

    if (error) {
      console.log('Error:', error);
    } else {
      this.spinnerService.show();

      this.storePayment();
    }
  }

  storePayment() {
    this.apiTokensService.storePayment(this.bundle).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handlePaymentResponse(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handlePaymentError();
      },
    });
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
      .then((res) => {
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
