import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { ICars } from '../app-model';
import { Cars, Faq, Reviews } from 'src/api/cars/data';

@Injectable({
  providedIn: 'root',
})
export class appService {
  private Url = 'api/cars/datas.json';

  constructor(private http: HttpClient) {}

  getCars() {
    return Cars;
  }

  getFaq() {
    return Faq;
  }
  
  getReviews() {
    return Reviews;
  }

  // getCars(): Observable<ICars[]> {
  //   return this.http.get<ICars[]>(this.Url).pipe(
  //     tap((data) => console.log('cars: ', JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     errorMessage = `Backend returned code ${err.status}: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(() => errorMessage);
  // }
}
