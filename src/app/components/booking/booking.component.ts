import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  @Input() car: any;

  pickupForm!: FormGroup;
  dropoffForm!: FormGroup;
  errorMessage: string = '';
  success: boolean = false;
  loading: boolean = false;
  isAuthenticated: boolean = false;

  pickupFormErrorMessage = 'Please fill in the required fields in the pickup form.';
  dropoffFormErrorMessage = 'Please fill in the required fields in the dropoff form.';
  authenticationErrorMessage = 'Please log in to continue.';

  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private toaastr = inject(ToastrService);

  ngOnInit(): void {
    this.pickupForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      pickupTime: ['', Validators.required],
      pickupDate: ['', Validators.required],
    });

    this.dropoffForm = this.fb.group({
      dropoffLocation: ['', Validators.required],
      dropoffTime: ['', Validators.required],
      dropoffDate: ['', Validators.required],
    });

    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      
    });
  }

  submitForm(): void {
    if (this.pickupForm?.valid && this.dropoffForm?.valid) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.success = true;
        this.toaastr.success('Booking Successful🎉')
      }, 500);
    } 
  }
}
