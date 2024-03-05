import { Component } from '@angular/core';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-messages-bar',
  templateUrl: './messages-bar.component.html',
  styleUrl: './messages-bar.component.css'
})
export class MessagesBarComponent {
  searchText: any;

  convsersations: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getConversations().subscribe({
      next: (data) => {
        this.handleConversations(data);
        console.log(data);
      },
      error: (error) => {
        this.handleError();
      },
    });
  }

  handleConversations(data: any) {
    this.convsersations = data;
  }

  handleError() {
    alertify.error('Wystąpił problem z wyświetleniem konwersjacji');
  }


}
