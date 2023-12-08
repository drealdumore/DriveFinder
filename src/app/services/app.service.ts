import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import {
  Brands,
  Carousel,
  Cars,
  Faq,
  Reviews,
  SubReviews,
  category,
} from 'src/api/cars/data';
import { IBrands, ICars } from '../directives/app-model';

@Injectable({
  providedIn: 'root',
})
export class appService {
  getBrands(): IBrands[] {
    return Brands;
  }

  getCars() {
    return Cars;
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
