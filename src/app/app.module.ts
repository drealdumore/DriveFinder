import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderSucessfulPopup } from './app/popup/order-successful-popup.component';
import { CarProductComponent } from './app/popup/car-product.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FaqComponent } from './faq/faq.component';
import { ExperienceComponent } from './experience/experience.component';
import { BrandsComponent } from './home/brands/brands.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrevDirective, NextDirective } from './home/brands/brands.scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    OrderSucessfulPopup,
    CarProductComponent,
    FrontPageComponent,
    FaqComponent,
    ExperienceComponent,
    BrandsComponent,
    PrevDirective,
    NextDirective,
    HomeTestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
