import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authToggle: boolean = false;
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  errorMessage: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
      rememberMe: true,
    });
  }

  authToggleFn() {
    this.authToggle = !this.authToggle;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  loginWithGoogle() {
    this.auth
      .signInWithGoogle()
      .then((res: any) => {
        this.toastr.success('Sucessfully logged in');
      })
      .catch((error: any) => {
        console.error(error);
        this.toastr.error(error);
      });
  }

  registerWithEmail() {
    const formValue = Object.assign(this.signupForm.value, {
      email: this.signupForm.value.email,
    });

    this.auth
      .register(formValue)
      .then((res: any) => {
        this.toastr.success('Sucessfully registered');
      })
      .catch((error: any) => {
        console.error(error);
        this.toastr.error(this.errorMessage);

        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage =
            'Email address is already in use. Please choose another.';
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage =
            'Invalid email address. Please enter a valid email.';
        } else if (error.code === 'auth/weak-password') {
          this.errorMessage = 'Weak password. Please use a stronger password.';
        } else {
          this.errorMessage =
            'An error occurred during registration. Please try again later.';
        }
      });
  }

  signinWithEmail() {
    const formValue = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.email,
    });

    this.auth
      .login(formValue)
      .then((res: any) => {
        console.log('sign email login');
        this.toastr.success('Sucessfully logged in');
      })
      .catch((error: any) => {
        console.error(error);
        this.toastr.error(this.errorMessage);
        if (error.code === 'auth/user-not-found') {
          this.errorMessage =
            'User not found. Please check your email or sign up for an account.';
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage =
            'Invalid email address. Please enter a valid email.';
        } else if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'Incorrect password. Please try again.';
        } else {
          this.errorMessage =
            'An error occurred during login. Please try again later.';
        }
      });
  }
}
