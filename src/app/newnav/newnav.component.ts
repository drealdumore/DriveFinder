import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'navigation',
  templateUrl: './newnav.component.html',
  styleUrls: ['./newnav.component.css'],
})
export class NewnavComponent {
  isAuthenticated: boolean = false;
  Sub: boolean = false;
  isDropdownVisible = false;

  constructor(public modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }
}
