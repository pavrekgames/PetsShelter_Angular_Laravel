import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrl: './messages-panel.component.css',
})
export class MessagesPanelComponent {
  isMobile: boolean = false;

  messagesCount: number = 0;

  constructor(
    private messagesService: MessagesService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit() {
    this.messagesService.messagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );

    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });

  }
}
