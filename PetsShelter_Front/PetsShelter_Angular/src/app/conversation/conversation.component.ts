import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { RoutingService } from '../services/routing.service';
import { MessagesService } from '../services/messages.service';

declare let alertify: any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css',
})
export class ConversationComponent {
  faEnvelope = faEnvelope;

  conversationId: number = 0;

  conversation: Conversation = {
    id: 0,
    user_name: '',
    user_surname: '',
    pet_name: '',
    pet_photo: '',
  };

  message: Message = {
    content: '',
    conversation_id: 0,
  };

  conversationMessages: any;
  unreadMessagesCount: number = 0;
  unreadConversationMessagesCount: number = 0;

  page: number = 1;
  petsPerPage: number = 10;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private routingService: RoutingService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.params.id;
    console.log('Id konwersacji: ' + this.conversationId);

    if (this.conversationId != undefined) {
      this.spinnerService.show();

      this.apiService.getConversation(this.conversationId).subscribe({
        next: (data: any) => {
          this.spinnerService.hide();
          this.handleConversation(data);
        },
      });

      this.apiService.getMessages(this.conversationId).subscribe({
        next: (data: any) => {
          this.spinnerService.hide();
          this.handleConversationMessages(data);
        },
      });
    }
  }

  handleConversation(data: any) {
    this.conversation = data;
  }

  handleConversationMessages(data: any) {
    this.conversationMessages = data;

    this.apiService.getUnreadMessagesCount().subscribe({
      next: (data) => {
        this.updateUnreadMessagesCount(data);
      }
    });

    this.apiService.getUnreadConversationMessagesCount(this.conversationId).subscribe({
      next: (data) => {
        this.updateUnreadConversationMessagesCount(data);
      }
    });


  }

  sendMessage() {
    if (this.message.content.length > 0) {
      this.spinnerService.show();
      this.message.conversation_id = this.conversationId;

      this.apiService.createMessage(this.message).subscribe({
        next: (data: any) => {
          this.spinnerService.hide();
          this.handleMessageResponse();
        },
        error: (error) => {
          this.spinnerService.hide();
          this.handleMessageError(error);
        },
      });
    }
  }

  handleMessageResponse() {
    this.message.content = '';

    alertify.success('Wysłano wiadomość');
    const url = '/messages/' + this.conversation.id;
    this.routingService.redirectTo(url);
  }

  handleMessageError(error: any) {
    alertify.error('Wystąpił problem podczas wysłania wiadomości!');
  }

  updateUnreadMessagesCount(data: any) {
    this.unreadMessagesCount = data.messagesCount;
    this.messagesService.updateMessagesCount(this.unreadMessagesCount);
  }

  updateUnreadConversationMessagesCount(data: any) {
    this.unreadConversationMessagesCount = data.messagesCount;
    this.messagesService.updateConversationMessagesCount(this.unreadConversationMessagesCount, this.conversationId);
  }

}
