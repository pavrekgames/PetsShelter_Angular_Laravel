import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Conversation } from '../models/conversation';


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

}
