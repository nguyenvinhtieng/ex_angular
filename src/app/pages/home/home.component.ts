import { Component, TemplateRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public modalService: ModalService) { }


  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService.open(modalTemplate, { title: 'Modal Title' })
      .subscribe((action) => {
        console.log('modal action', action);
      });
  }
}
