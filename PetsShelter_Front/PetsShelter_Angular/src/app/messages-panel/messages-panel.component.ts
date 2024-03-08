import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrl: './messages-panel.component.css'
})
export class MessagesPanelComponent {


  messagesCount: number = 1;

  constructor() { }

  receiveMessagesCount($event: number) {
    this.messagesCount = $event;
    console.log("Messages Count dupaaa: " + $event);
  }

}
