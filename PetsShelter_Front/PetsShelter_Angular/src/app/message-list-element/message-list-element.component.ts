import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Conversation } from '../models/conversation';
import { Router } from '@angular/router';
import { RoutingService } from '../services/routing.service';
import { MessagesService } from '../services/messages.service';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-message-list-element',
  templateUrl: './message-list-element.component.html',
  styleUrl: './message-list-element.component.css',
})
export class MessageListElementComponent {
  faUser = faUser;

  @Input()
  conversation: Conversation = {
    id: 0,
    user_name: 'a',
    user_surname: 'a',
    pet_name: 'a',
    pet_photo: 'a',
  };

  messagesCount: number = 1;

  constructor(
    private routingService: RoutingService,
    private apiService: ApiService,
    private messagesService: MessagesService
  ) {
    this.messagesService.conversationMessagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );
  }

  ngOnInit(): void {

    this.apiService.getConversationUnreadMessagesCount(this.conversation.id).subscribe({
      next: (data) => {
        this.getUnreadMessagesCount(data);
      },
    });

    this.messagesService.conversationMessagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );
  }

  selectConversation() {
    const url = '/messages/' + this.conversation.id;
    this.routingService.redirectTo(url);
  }

  getUnreadMessagesCount(data: any) {
    this.messagesCount = data.messagesCount;
  }

}
