import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { SpinnerService } from '../services/spinner.service';

declare let alertify: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  hasSubmitted: boolean = false;
  hasResetSend: boolean = false;
  error = null;

  resetPasswordForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.hasSubmitted = false;
    this.hasResetSend = false;
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.error = null;

    this.validateResetPasswordForm();
  }

  validateResetPasswordForm() {
    if (this.resetPasswordForm.valid) {
      this.spinnerService.show();
      const formData = this.resetPasswordForm.getRawValue();

      this.resetPassword(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  resetPassword(formData: any) {
    this.apiService.resetPassword(formData).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      },
    });
  }

  handleResponse(data: any) {
    this.hasResetSend = true;
    alertify.success('Nowe hasło zostało wysłane');
  }

  handleError(error: any) {
    this.error = error.error.error;
    alertify.error('Błędne dane');
  }
}
