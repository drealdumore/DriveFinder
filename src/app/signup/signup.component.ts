import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  showPassword: boolean = false;
  emailMessage: string = '';

  private validationMessages = {
    required: 'Please enter your email address.',
    email:
      'Incorrect email, make sure the format is correct (name@domain.com).',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    const emailControl = this.signupForm.get('email');
    emailControl?.valueChanges.subscribe((value) =>
      // this.setMessage(emailControl)
      console.log(value)
    );
  }

  // setMessage(c: AbstractControl) {
  //   this.emailMessage = '';
  //   if ((c.touched || c.dirty) && c.errors) {
  //     this.emailMessage = Object.keys(c.errors).map(
  //       (key: keyof ) => this.validationMessages[key]).join(' ')
  //   }
  // }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  save() {
    console.log(this.signupForm);
  }
}
