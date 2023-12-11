import { Injectable } from '@angular/core';
import {
  Brandies,
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

  getBrand(id: any) {
    const lowerCaseId = id.toLowerCase();
    return Brands.find(
      (brand) => brand.brandName.toLowerCase() === lowerCaseId
    );
  }

  getBrandies(id: any) {
    const lowerCaseId = id.toLowerCase();
    return Brandies.find(
      (brand) => brand.brandName.toLowerCase() === lowerCaseId
    );
  }

  getCars() {
    return Cars;
  }

  getCar(id: any) {
    const lowerCaseId = id.toLowerCase();
    return Cars.find((car) => car.brand.toLowerCase() === lowerCaseId);
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
