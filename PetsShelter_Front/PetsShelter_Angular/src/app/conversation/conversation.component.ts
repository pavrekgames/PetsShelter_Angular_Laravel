import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { RoutingService } from '../services/routing.service';
import { MessagesService } from '../services/messages.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ApiMessagesService } from '../services/api-messages.service';

declare let alertify: any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css',
})
export class ConversationComponent {
  isMobile: boolean = false;

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
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private routingService: RoutingService,
    private messagesService: MessagesService,
    private breakPointService: BreakpointObserver,
    private apiMessagessService: ApiMessagesService
  ) {}

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.params.id;

    if (this.conversationId != undefined) {
      this.spinnerService.show();

      this.getConversations();
      this.getMessages();
    }

    this.checkDeviceSize();
  }

  getConversations() {
    this.apiMessagessService.getConversation(this.conversationId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleConversation(data);
      },
    });
  }

  getMessages() {
    this.apiMessagessService.getMessages(this.conversationId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleConversationMessages(data);
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

  handleConversation(data: any) {
    this.conversation = data;
  }

  handleConversationMessages(data: any) {
    this.conversationMessages = data;

    this.updateMessageCount();
    this.updateConversationMessagesCount();
  }

  updateMessageCount() {
    this.apiMessagessService.getUnreadMessagesCount().subscribe({
      next: (data) => {
        this.updateUnreadMessagesCount(data);
      },
    });
  }

  updateConversationMessagesCount() {
    this.apiMessagessService
      .getUnreadConversationMessagesCount(this.conversationId)
      .subscribe({
        next: (data) => {
          this.updateUnreadConversationMessagesCount(data);
        },
      });
  }

  sendMessage() {
    if (this.message.content.length > 0) {
      this.spinnerService.show();
      this.message.conversation_id = this.conversationId;

      this.createMessage();
    }
  }

  createMessage() {
    this.apiMessagessService.createMessage(this.message).subscribe({
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
    this.messagesService.updateConversationMessagesCount(
      this.unreadConversationMessagesCount,
      this.conversationId
    );
  }
}
