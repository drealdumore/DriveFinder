import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-sub',
  templateUrl: './user-sub.component.html',
  styleUrls: ['./user-sub.component.css'],
})
export class UserSubComponent {
  @Input() userEmail: string = '';
  @Input() userName: string = '';
  @Input() firstLetter: string = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();


  logout() {
    this.logoutEvent.emit();
  }

  close() {
    this.closeModal.emit();
  }
  
}
