import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';

declare let alertify: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: any;

  page: number = 1;
  usersPerPage: number = 4;

  constructor(
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllUsers(data);
        console.log(data);
      },
    });
  }

  handleAllUsers(data: any) {
    this.users = data;
  }

  deleteUserWindow(userId: any, userName: any, userSurname: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Usuwanie użytkownika');
    newConfirmBox.setMessage(
      'Czy na pewno chcesz usunąć użytkownika ' +
        userName +
        ' ' +
        userSurname +
        ' ?'
    );

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('Tak', 'Nie');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteUser(userId);
      }
    });
  }

  deleteUser(petId: any) {
    this.spinnerService.show();

    this.apiService.deleteUser(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
        console.log(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
        console.log(error);
      },
    });
  }

  handleResponse() {
    window.location.reload();
    alertify.success('Usunąłeś użytkownika');
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
