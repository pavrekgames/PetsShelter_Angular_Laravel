import {
  EnvironmentInjector,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ModalTestComponent } from '../modal-test/modal-test.component';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {

  private modalNotifier?: Subject<string>;

  constructor(
    private injector: EnvironmentInjector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(viewContainerRef: ViewContainerRef, content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    const contentViewRef = content.createEmbeddedView(null);
    const modal = viewContainerRef.createComponent(ModalTestComponent, {
      environmentInjector: this.injector,
      projectableNodes: contentViewRef.rootNodes,
    });

    modal.instance.size = options?.size;
    modal.instance.title = options?.title;

    modal.instance.closeEvent.subscribe(() => this.closeModal());
    modal.instance.submitEvent.subscribe(() => this.submitModal());

    modal.hostView.detectChanges();

    this.document.body.appendChild(modal.location.nativeElement);

    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();
  }

  closeModal(){
    this.modalNotifier?.complete();
  }

  submitModal(){
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }

}
