import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Conversation } from '../models/conversation';
import { RoutingService } from '../services/routing.service';
import { MessagesService } from '../services/messages.service';
import { ApiMessagesService } from '../services/api-messages.service';

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

  messagesCount: number = 0;

  constructor(
    private routingService: RoutingService,
    private messagesService: MessagesService,
    private apiMessagessService: ApiMessagesService
  ) {
    this.messagesService.conversationMessagesCountObs.subscribe(
      ([messagesCount, conversationId]) =>
        this.updateConversationMessagesCount(messagesCount, conversationId)
    );
  }

  ngOnInit(): void {
    this.getConversationMessagesCount();

    this.messagesService.conversationMessagesCountObs.subscribe(
      ([messagesCount, conversationId]) =>
        this.updateConversationMessagesCount(messagesCount, conversationId)
    );
  }

  getConversationMessagesCount() {
    this.apiMessagessService
      .getUnreadConversationMessagesCount(this.conversation.id)
      .subscribe({
        next: (data) => {
          this.getUnreadMessagesCount(data);
        },
      });
  }

  selectConversation() {
    const url = '/messages/' + this.conversation.id;
    this.routingService.redirectTo(url);
  }

  getUnreadMessagesCount(data: any) {
    this.messagesCount = data.messagesCount;
  }

  updateConversationMessagesCount(
    messagesCount: number,
    conversationId: number
  ) {
    if (this.conversation.id == conversationId) {
      this.messagesCount = messagesCount;
    }
  }
}
