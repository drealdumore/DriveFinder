import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  populateData(): void {
    this.loginForm.setValue({
      email: 'test@test.com',
      password: 'testing',
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
