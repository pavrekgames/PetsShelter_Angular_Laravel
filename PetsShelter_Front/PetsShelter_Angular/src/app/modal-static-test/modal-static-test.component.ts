import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-static-test',
  templateUrl: './modal-static-test.component.html',
  styleUrl: './modal-static-test.component.css'
})
export class ModalStaticTestComponent {

  @Input() size? = 'md';
  @Input() title? = 'Modal title';
  @Input() content = 'Czy aby na pewno?';

  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<boolean>();

  close() {
    this.closeEvent.emit(false);
  }

  submit() {
    this.submitEvent.emit(false);
  }

}
