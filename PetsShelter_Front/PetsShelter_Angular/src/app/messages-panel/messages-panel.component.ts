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
  isBigMobile: boolean = false;

  messagesCount: number = 0;

  constructor(
    private messagesService: MessagesService,
    private breakPointService: BreakpointObserver
  ) {}

  ngOnInit() {
    this.messagesService.messagesCountObs.subscribe(
      (messagesCount) => (this.messagesCount = messagesCount)
    );

    this.breakPointService.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe((result) => {
      this.isMobile = false;

      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }

      if (result.breakpoints[Breakpoints.Small]) {
        this.isBigMobile = true;
      }else{
        this.isBigMobile = false;
      }

      if (result.breakpoints[Breakpoints.Medium]) {
        //this.isMedium = true;
      }else{
        //this.isMedium = false;
      }
    });

  }
}
