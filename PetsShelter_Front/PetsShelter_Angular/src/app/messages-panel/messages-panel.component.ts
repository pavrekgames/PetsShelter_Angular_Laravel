import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrl: './messages-panel.component.css'
})
export class MessagesPanelComponent {

  faEnvelope = faEnvelope;

}
