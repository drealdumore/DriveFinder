import { Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import { SignupComponent } from './app/components/signup/signup.component';
import { HomepageComponent } from './app/pages/homepage/homepage.component';
import { FrontPageComponent } from './app/pages/front-page/front-page.component';

export const appRoutes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'app', component: FrontPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
