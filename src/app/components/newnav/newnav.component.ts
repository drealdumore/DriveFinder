import { Component, OnInit, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
  firstLetter: string = '';

  modalService = inject(ModalService);
  authService = inject(AuthService);
  toastr = inject(ToastrService);

  ngOnInit(): void {
    // to check authentication state
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    // Retrieve user information from local storage if available
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser).displayName;
      this.userImg = JSON.parse(storedUser).photoURL;
      this.userEmail = JSON.parse(storedUser).email;

      // to display the first letter of the userEmail.
      this.firstLetter = this.userEmail.charAt(0).toUpperCase();
    }
  }

  logout() {
    this.authService
      .logOut()
      .then((res: any) => {
        this.toastr.success('Successfully Logged Out.');
      })
      .catch((error: any) => {
        this.toastr.error('error');
      });
  }

  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  // if the mouse is not over the drop down, this.isDropdownVisible = false;
  // else if the mouse is over the dropdown, this.isDropdownVisible = true;
}
