import { Component } from '@angular/core';
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
    user_name: 'a',
    user_surname: 'a',
    pet_name: 'a',
    pet_photo: 'a'
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    //this.spinnerService.show();

    this.conversationId = this.route.snapshot.params.id;
    console.log("Id konwersacji: " + this.conversationId);

    this.apiService.getConversation(this.conversationId).subscribe({
      next: (data: any) => {
        this.spinnerService.hide();
        this.handleConversation(data);
        console.log(data);
      },
    });
  }

  handleConversation(data: any){
    this.conversation = data;
  }

}
