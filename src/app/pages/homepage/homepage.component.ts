import { Component } from '@angular/core';
import { IReview } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  reviews: IReview[] = [];

  cars: any[] = [];
  brands: any[] = [];

  filteredCars: any[] = [];
  categorizedCars: any[] = [];

  constructor(private appService: appService) {
    this.reviews = this.appService.getReviews();
  }

  ngOnInit(): void {
    this.cars = this.appService.getCars();
    this.categorizedCars = this.appService.getCategories();
    this.filteredCars = this.appService.getbrandcategory();

    // this.filteredCars = this.filterCarsByBrand(this.cars);
    // this.categorizedCars = this.filterCarsByCategory(this.cars);
  }

  // private filterCarsByBrand(cars: any[]) {
  //   const filteredBrands: Set<string> = new Set();
  //   return cars.filter((car: { brand: string }) => {
  //     if (!filteredBrands.has(car.brand)) {
  //       filteredBrands.add(car.brand);
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  // private filterCarsByCategory(cars: any[]) {
  //   const filteredCategory: Set<string> = new Set();
  //   return cars.filter((car: { category: string }) => {
  //     if (!filteredCategory.has(car.category)) {
  //       filteredCategory.add(car.category);
  //       return true;
  //     }
  //     return false;
  //   });
  // }
}
