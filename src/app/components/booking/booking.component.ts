import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

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
  }

  submitForm(): void {
    if (this.pickupForm?.valid && this.dropoffForm?.valid) {
      // display the loader for sometime,
      // then display the approved then hide booking component

      console.log('Pickup Form:', this.pickupForm.value);
      console.log('Drop-off Form:', this.dropoffForm.value);
      this.loading = true;
      
      setTimeout(() => {
        this.loading = false;
        this.success = true;
      }, 500);
    } else {
      this.errorMessage =
        'Form is not valid. Please fill in all required fields.';
    }
  }

}
