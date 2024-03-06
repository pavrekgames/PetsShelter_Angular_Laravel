import { Component, Input } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { Router } from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {

  faEnvelope = faEnvelope;

  conversationId: number = 0;

  conversation: Conversation = {
    id: 0,
    user_name: '',
    user_surname: '',
    pet_name: '',
    pet_photo: ''
  };

  message: Message = {
    content: '',
    conversation_id: 0
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.conversationId = this.route.snapshot.params.id;
    console.log("Id konwersacji: " + this.conversationId);

    if(this.conversationId != undefined){
      this.spinnerService.show();

      this.apiService.getConversation(this.conversationId).subscribe({
        next: (data: any) => {
          this.spinnerService.hide();
          this.handleConversation(data);
        },
      });
    }

  }

  handleConversation(data: any){
    this.conversation = data;
  }

  sendMessage(){

    if(this.message.content.length > 0){

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
    this.message.content = "";
    this.router.navigate(['/messages/' + this.conversationId]);
    alertify.success('Wysłano wiadomość');
  }

  handleMessageError(error: any) {
    alertify.error('Wystąpił problem podczas wysłania wiadomości!');
  }


}
