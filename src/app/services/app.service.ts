import { Injectable } from '@angular/core';
import { Observable, catchError, from, of, tap } from 'rxjs';
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
import { IReview } from '../directives/app-model';

@Injectable({
  providedIn: 'root',
})
export class appService {
  getBrands(id: any) {
    const lowerCaseId = id.toLowerCase();
    return Brands.find(
      (brand) => brand.brandName.toLowerCase() === lowerCaseId
    );
  }

  getCars() {
    return Cars;
  }

  getCar(id: any) {
    const lowerCaseId = id.toLowerCase();
    return Cars.find((car) => car.id.toLowerCase() === lowerCaseId);
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


  getReviews(): Observable<IReview[]> {
    return of(Reviews).pipe(
      tap((data) => console.log(JSON.stringify(data)))
    );
  }

  getSubReviews(): Observable<IReview[]> {
    return of(SubReviews)
  }

  getCarousel() {
    return Carousel;
  }
}
