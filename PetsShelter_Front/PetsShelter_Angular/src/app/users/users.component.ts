import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { SpinnerService } from '../services/spinner.service';
import { RoutingService } from '../services/routing.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  isMobile: boolean = false;

  users: any;

  page: number = 1;
  usersPerPage: number = 4;

  constructor(
    private apiService: ApiService,
    private routingService: RoutingService,
    private spinnerService: SpinnerService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.getUsers();
    this.checkDeviceSize();
  }

  getUsers() {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllUsers(data);
        console.log(data);
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

    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('Tak', 'Nie');

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
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
      },
    });
  }

  handleResponse() {
    alertify.success('Usunąłeś użytkownika');
    const url = '/users';
    this.routingService.redirectTo(url);
  }

  handleError() {
    alertify.error('Wystąpił problem!');
  }
}
