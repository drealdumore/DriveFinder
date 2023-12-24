import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './newnav.component.html',
  styleUrls: ['./newnav.component.css'],
})
export class NewnavComponent implements OnInit {
  isAuthenticated: boolean = false;
  Sub: boolean = false;
  isDropdownVisible = false;
  user: string = '';
  userImg: string = '';
  userEmail: string = '';

  constructor(
    public modalService: ModalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    // to get user display name and img from their email
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser).displayName;
      this.userImg = JSON.parse(storedUser).photoURL;
      this.userEmail = JSON.parse(storedUser).email;
    }
  }

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
