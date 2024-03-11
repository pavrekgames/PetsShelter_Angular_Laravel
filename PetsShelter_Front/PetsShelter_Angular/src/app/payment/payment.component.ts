import { Component } from '@angular/core';
import { Bundle } from '../models/bundle';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';

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

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService
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

  handleBundle(data: any) {
    this.bundle = data;
  }

}
