import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMessageElement]'
})
export class MessageElementDirective {

  constructor() { }

  @HostListener('mouseenter')
  mouseEnter(){

  }

  @HostListener('mouseleave')
  mouseLeave() {

  }

}
