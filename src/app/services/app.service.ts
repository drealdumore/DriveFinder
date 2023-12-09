import { Injectable } from '@angular/core';
import {
  Brands,
  Carousel,
  Cars,
  Faq,
  Reviews,
  SubReviews,
  brand,
  category,
} from 'src/api/cars/data';
import { IBrands } from '../directives/app-model';

@Injectable({
  providedIn: 'root',
})
export class appService {
  getBrands(): IBrands[] {
    return Brands;
  }
  
  getBrand(id: any): IBrands[] {
    return Brands;
  }

  getCars() {
    return Cars;
  }

  getbrandcategory() {
    return brand;
  }

  getCategories() {
    return category;
  }

  getFaq() {
    return Faq;
  }

  getReviews() {
    return Reviews;
  }

  getSubReviews() {
    return SubReviews;
  }

  getCarousel() {
    return Carousel;
  }
}
