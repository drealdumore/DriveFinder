import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable( {
  providedIn: 'root'  
})

export class appService {
    private productsUrl = 'api/data';
  
//   constructor(private http: HttpClient) { }

//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.productsUrl)
//       .pipe(
//         tap(data => console.log('Products: ', JSON.stringify(data))),
//         catchError(this.handleError)
//       );
//   }
}