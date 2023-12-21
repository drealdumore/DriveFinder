import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
})
export class UserMainComponent {
  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.closeModal();
  }
}
