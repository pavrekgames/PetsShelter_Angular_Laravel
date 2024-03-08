import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrl: './messages-panel.component.css'
})
export class MessagesPanelComponent {

  messagesCount: number = 0;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.messagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );
  }

}
