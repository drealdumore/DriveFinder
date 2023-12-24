import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'user-sub',
  templateUrl: './user-sub.component.html',
  styleUrls: ['./user-sub.component.css'],
})
export class UserSubComponent {
  @Input() userData: [] = [];
  @Input() userEmail: string = '';
  @Input() userName: string = '';
  @Input() userImg: string = '';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private modalService: ModalService
  ) {}

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

  close() {
    this.modalService.closeModal();
  }

}
