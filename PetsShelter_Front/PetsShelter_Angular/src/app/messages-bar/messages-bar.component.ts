import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { ApiMessagesService } from '../services/api-messages.service';

declare let alertify: any;

@Component({
  selector: 'app-messages-bar',
  templateUrl: './messages-bar.component.html',
  styleUrl: './messages-bar.component.css',
})
export class MessagesBarComponent {
  isMobile: boolean = false;
  isBigMobile: boolean = false;
  isCollapsed: boolean = false;

  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;

  searchText: any;

  convsersations: any;

  constructor(
    private breakPointService: BreakpointObserver,
    private apiMessagessService: ApiMessagesService
  ) {}

  ngOnInit(): void {
    this.getConversations();

    this.checkDeviceSize();
  }

  getConversations() {
    this.apiMessagessService.getConversations().subscribe({
      next: (data) => {
        this.handleConversations(data);
      },
      error: (error) => {
        this.handleError();
      },
    });
  }

  checkDeviceSize() {
    this.breakPointService
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((result) => {
        this.isMobile = false;

        if (result.breakpoints[Breakpoints.XSmall]) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }

        if (result.breakpoints[Breakpoints.Small]) {
          this.isBigMobile = true;
        } else {
          this.isBigMobile = false;
        }
      });
  }

  handleConversations(data: any) {
    this.convsersations = data;
  }

  handleError() {
    alertify.error('Wystąpił problem z wyświetleniem konwersjacji');
  }

  toggleSidebar() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }
}
