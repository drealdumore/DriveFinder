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
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BrandsComponent } from './components/brands/brands.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrevDirective, NextDirective } from './directives/scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeTestimonialsComponent } from './components/home-testimonials/home-testimonials.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHeroComponent } from './components/header-hero/header-hero.component';
import { SectionHeadingComponent } from './components/section-heading';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { SearchSubComponent } from './components/search-sub/search-sub.component';
import { ReviewSubComponent } from './components/review-sub/review-sub.component';
import { HeaderSubComponent } from './components/header-sub/header-sub.component';
import { StarsComponent } from './components/stars/stars.component';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { CarDetailPageComponent } from './pages/car-detail-page/car-detail-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrandCarsComponent } from './components/brand-cars/brand-cars.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { BookingComponent } from './components/booking/booking.component';
import { Error404Component } from './components/404.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    OrderSucessfulPopup,
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
    SectionHeadingComponent,
    HowItWorksComponent,
    SearchSubComponent,
    ReviewSubComponent,
    HeaderSubComponent,
    StarsComponent,
    BrandPageComponent,
    CarDetailPageComponent,
    CategoryComponent,
    CarouselComponent,
    BrandCarsComponent,
    CarouselMainComponent,
    CarInfoComponent,
    BookingComponent,
    Error404Component,
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
