import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import {
  Brands,
  Carousel,
  Cars,
  Categories,
  Faq,
  Reviews,
  SubReviews,
  brand,
  category,
} from 'src/api/cars/data';
import {
  BigCategories,
  IBrand,
  ICarousel,
  ICars,
  IFaq,
  IReview,
  SortItem,
} from '../directives/app-model';

@Injectable({
  providedIn: 'root',
})
export class appService {
  getBrand(id: any): Observable<IBrand> {
    const lowerCaseId = id.toLowerCase();
    return of(Brands).pipe(
      map(
        (brands) =>
          brands.find((brand) => brand.brandName.toLowerCase() === lowerCaseId)!
      )
    );
  }

  getCategory(id: any): Observable<BigCategories> {
    const lowerCaseId = id.toLowerCase();
    return of(Categories).pipe(
      map(
        (categories) =>
          categories.find((category) => category.categoryid.toLowerCase() === lowerCaseId)!
      )
    );
  }

  // getCategory(id: any): Observable<ICars> {
  //   const lowerCaseId = id.toLowerCase();
  //   return of(Cars).pipe(
  //     map(
  //       (cars) =>
  //         cars.find((car) => car.category.toLowerCase() === lowerCaseId)!
  //     )
  //   );
  // }

  getCar(id: any): Observable<ICars> {
    const lowerCaseId = id.toLowerCase();
    return of(Cars).pipe(
      map((cars) => cars.find((car) => car.id.toLowerCase() === lowerCaseId)!)
    );
  }

  getBrandcategory(): Observable<SortItem[]> {
    return of(brand);
  }

  getCategories(): Observable<SortItem[]> {
    return of(category);
  }

  getFaq(): Observable<IFaq[]> {
    return of(Faq);
  }

  getReviews(): Observable<IReview[]> {
    return of(Reviews);
  }

  getSubReviews(): Observable<IReview[]> {
    return of(SubReviews);
  }

  getCarousel(): Observable<ICarousel[]> {
    return of(Carousel);
  }
}
