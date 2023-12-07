import { Injectable } from '@angular/core';
import { Cars, Faq, Reviews, SubReviews } from 'src/api/cars/data';

@Injectable({
  providedIn: 'root',
})
export class appService {
  getCars() {
    return Cars;
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
}
