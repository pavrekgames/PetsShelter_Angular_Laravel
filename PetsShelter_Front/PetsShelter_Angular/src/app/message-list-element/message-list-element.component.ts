import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';

declare let alertify: any;

@Component({
  selector: 'app-message-list-element',
  templateUrl: './message-list-element.component.html',
  styleUrl: './message-list-element.component.css'
})
export class MessageListElementComponent {

  faUser = faUser;

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
