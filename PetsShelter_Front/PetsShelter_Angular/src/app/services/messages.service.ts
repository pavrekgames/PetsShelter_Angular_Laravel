import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messagesCountObs = new BehaviorSubject<number>(0);

  constructor() { }

  updateMessagesCount(messagesCount: number){
    this.messagesCountObs.next(messagesCount);
  }

}
