import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef, inject } from "@angular/core";
import { ModalComponent } from "../components/modal/modal.component";
import { DOCUMENT } from "@angular/common";
import { Subject } from "rxjs";
export interface ModalOptions {
  title?: string,
  text?: string,
  isDanger?: boolean
}
@Injectable()
export class ModalService {
  private modalNotifier?: Subject<string>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  open(content: TemplateRef<any>, options?: ModalOptions) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent)
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes
    ])
    modalComponent.instance.title = options?.title || '';
    modalComponent.instance.text = options?.text || '';
    modalComponent.instance.isDanger = options?.isDanger || false;

    modalComponent.instance.closeEvent.subscribe(() => this.closeModal())
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal())

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement)

    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('submit');
  }
}
