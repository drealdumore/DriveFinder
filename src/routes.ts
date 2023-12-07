import { Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import { SignupComponent } from './app/components/signup/signup.component';
import { HomepageComponent } from './app/pages/homepage/homepage.component';
import { FrontPageComponent } from './app/pages/front-page/front-page.component';
import { HowItWorksComponent } from './app/pages/how-it-works/how-it-works.component';

export const appRoutes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: '', component: HomepageComponent },
  { path: 'how-drivefinder-works', component: HowItWorksComponent },
  { path: 'app', component: FrontPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
