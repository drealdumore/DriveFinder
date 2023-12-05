import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderSucessfulPopup } from './components/order-successful-popup.component';
import { CarProductComponent } from './components/car-product.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BrandsComponent } from './components/brands/brands.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrevDirective, NextDirective } from './components/brands/brands.scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeTestimonialsComponent } from './components/home-testimonials/home-testimonials.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHeroComponent } from './header-hero/header-hero.component';
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
    FeaturesComponent,
    FooterComponent,
    HeaderHeroComponent,
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
