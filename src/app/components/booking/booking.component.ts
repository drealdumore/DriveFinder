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

  constructor(private fb: FormBuilder,private toastr: ToastrService) {}

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
      console.log('Pickup Form:', this.pickupForm.value);
      console.log('Drop-off Form:', this.dropoffForm.value);
    } else {
      // Handle invalid form submission
      console.log('Form is not valid. Please fill in all required fields.');
    }
  }
}
