import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api-service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare let alertify: any;

@Component({
  selector: 'app-messages-bar',
  templateUrl: './messages-bar.component.html',
  styleUrl: './messages-bar.component.css',
})
export class MessagesBarComponent {
  isMobile: boolean = false;
  isCollapsed: boolean = false;

  searchText: any;

  convsersations: any;

  constructor(
    private apiService: ApiService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.apiService.getConversations().subscribe({
      next: (data) => {
        this.handleConversations(data);
      },
      error: (error) => {
        this.handleError();
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

  }

  handleConversations(data: any) {
    this.convsersations = data;
  }

  handleError() {
    alertify.error('Wystąpił problem z wyświetleniem konwersjacji');
  }

  toggleSidebar(){

    if(this.isCollapsed){
      this.isCollapsed = false;
    }else{
      this.isCollapsed = true;
    }

  }

}
