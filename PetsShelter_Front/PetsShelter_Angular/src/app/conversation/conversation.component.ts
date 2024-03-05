import { Component, Input } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { Conversation } from '../models/conversation';

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
    user_name: 'c',
    user_surname: 'c',
    pet_name: 'e',
    pet_photo: 'f'
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService
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

}
