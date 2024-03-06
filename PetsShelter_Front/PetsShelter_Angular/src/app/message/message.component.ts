import { Component, Input } from '@angular/core';
import { ConversationMessage } from '../models/conversation-message';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  authUser: any;
  isSenderMessage: boolean = false;

  @Input()
  conversationMessage: ConversationMessage = {
    content: '',
    user_name: '',
    user_surname: '',
    date: '',
    sender_id: 0,
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

   this.authUser = this.authService.getUser();

   this.checkSender();

  }

  checkSender(){

    console.log('Sender_id: ' + this.conversationMessage.sender_id);

    if(this.conversationMessage.sender_id == this.authUser.id){
      this.isSenderMessage = true;
    }else{
      this.isSenderMessage = false;
    }
  }

}
