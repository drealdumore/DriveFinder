import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isAuthenticated: boolean = false;
  Sub: boolean = false;

  constructor(public modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }
}
