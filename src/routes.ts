import { Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import { HomepageComponent } from './app/pages/homepage/homepage.component';
import { HowItWorksComponent } from './app/pages/how-it-works/how-it-works.component';
import { BrandPageComponent } from './app/pages/brand-page/brand-page.component';
import { CarDetailPageComponent } from './app/pages/car-detail-page/car-detail-page.component';
import { Error404Component } from './app/components/404.component';
import { AuthComponent } from './app/components/auth/auth.component';

export const appRoutes: Routes = [
  { path: 'authentication', component: AuthComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'brand/:brandID', component: BrandPageComponent }, // route to brand page // drivefinder/rent/brand
  { path: 'brand/:brandID/:carID', component: CarDetailPageComponent }, // route to product page
  { path: 'how-drivefinder-works', component: HowItWorksComponent },
  { path: 'detail', component: CarDetailPageComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: '**', component: Error404Component },
  // { path: '404', component: Error404Component },
];
