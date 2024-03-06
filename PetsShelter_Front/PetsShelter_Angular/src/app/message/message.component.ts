import { Component, Input } from '@angular/core';
import { ConversationMessage } from '../models/conversation-message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input()
  conversationMessage: ConversationMessage = {
    content: '',
    user_name: '',
    user_surname: '',
    date: ''
  }



}
