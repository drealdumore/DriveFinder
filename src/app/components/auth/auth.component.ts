import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

function passwordMatcher(password: string, confirmPassword: string) {
  return function (form: AbstractControl) {
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirmPassword)?.value;

    if (passwordValue === confirmPasswordValue) {
      return null;
    }
    return { passwordMatcherError: true };
  };
}

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
  passwordMessage: string = '';
  emailMessage: string = '';

  loginPasswordMessage: string = '';
  loginEmailMessage: string = '';

  signupPasswordMessage: string = '';
  signupEmailMessage: string = '';

  passwordValidationMessages: { [key: string]: string } = {
    required: 'Password is required.',
    minlength: 'Password must be at least 3 characters long.',
    maxlength: 'Password cannot be more than 9 characters long.',
  };

  emailValidationMessages: { [key: string]: string } = {
    required: 'Email address is required.',
    email: 'Please enter a valid email address.',
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(9)],
      ],
      rememberMe: true,
    });

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(9)],
      ],
    });

    this.subscribeToPasswordChanges(this.signupForm);
    this.subscribeToPasswordChanges(this.loginForm);

    // this.subscribeToEmailChanges(this.signupForm);
    // this.subscribeToEmailChanges(this.loginForm);

    this.subscribeToEmailChanges(this.signupForm, 'email');
    this.subscribeToEmailChanges(this.loginForm, 'email');
  }

  private setPasswordMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors)
        .map((key) => this.passwordValidationMessages[key])
        .join(' ');
    }
  }

  private setEmailMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map((key) => this.emailValidationMessages[key])
        .join(' ');
    }
  }

  private subscribeToPasswordChanges(form: FormGroup): void {
    const passwordControl = form.get('password');
    if (passwordControl) {
      passwordControl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((value) => {
          this.setPasswordMessage(passwordControl);
        });
    }
  }

  // private subscribeToEmailChanges(form: FormGroup): void {
  //   const emailControl = form.get('email');
  //   // change this so it will get the value like signupupform.get('email)
  //   if (emailControl) {
  //     emailControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
  //       this.setEmailMessage(emailControl);
  //     });
  //   }
  // }

  private subscribeToEmailChanges(form: FormGroup, controlName: string): void {
    const emailControl = form.get(controlName);

    if (emailControl) {
      emailControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
        this.setEmailMessage(emailControl);
      });
    }
  }

  authToggleFn() {
    this.authToggle = !this.authToggle;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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

        if (error.code === 'auth/user-not-found') {
          this.errorMessage =
            'User not found. Please check your email or sign up for an account.';
        } else if (error.code === 'auth/invalid-email') {
          this.errorMessage =
            'Invalid email address. Please enter a valid email.';
        } else if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'Incorrect password. Please try again.';
        } else if (error.code === 'auth/invalid-credential') {
          this.errorMessage =
            'User not found. Please check your email or sign up for an account.';
        } else {
          this.errorMessage =
            'An error occurred during login. Please try again later.';
        }

        this.toastr.error(this.errorMessage);
      });
  }
}
