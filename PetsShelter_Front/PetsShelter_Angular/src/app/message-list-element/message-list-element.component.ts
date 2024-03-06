import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Conversation } from '../models/conversation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message-list-element',
  templateUrl: './message-list-element.component.html',
  styleUrl: './message-list-element.component.css'
})
export class MessageListElementComponent {

  faUser = faUser;

  @Input()
  conversation: Conversation = {
    id: 0,
    user_name: 'a',
    user_surname: 'a',
    pet_name: 'a',
    pet_photo: 'a'
  };

  constructor(private router: Router){}

  @Input()
  selectConversation(){

    this.router.navigate(['/messages/' + this.conversation.id]);

  }

}
