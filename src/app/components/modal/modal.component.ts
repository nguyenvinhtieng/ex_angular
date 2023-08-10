import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() text = '';
  @Input() title = '';
  @Input() isDanger = false;
  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  close() {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit() {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
