import { ModalsService } from './../services/modals.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrl: './modal-test.component.css',
})
export class ModalTestComponent {
  @Input() size? = 'md';
  @Input() title? = 'Modal title';
  @Input() content = 'Czy aby na pewno?';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private modalsService: ModalsService
  ) {
  }

  close() {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit() {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
