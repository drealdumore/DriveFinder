import { Component } from '@angular/core';
import { IReview } from 'src/app/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  reviews: IReview[] = [];

  constructor(private appService: appService) {
    this.reviews = this.appService.getReviews();
  }

  cars: any[] = [];
  filteredCars: any[] = [];
  categorizedCars: any[] = [];
  text: string = '';

  ngOnInit(): void {
    this.cars = this.appService.getCars();
    this.filteredCars = this.filterCarsByBrand(this.cars);
    this.categorizedCars = this.filterCarsByCategory(this.cars);
    // if (this.categorizedCars.length > 0) {
    //   this.text = this.categorizedCars[0].category;
    // }

    // Extract categories from categorizedCars
    const categories = this.categorizedCars.map((car) => car.category);

    // Join categories into a single string
    this.text = categories.join(', ');
  }

  private filterCarsByBrand(cars: any[]) {
    const filteredBrands: Set<string> = new Set();
    return cars.filter((car: { brand: string }) => {
      if (!filteredBrands.has(car.brand)) {
        filteredBrands.add(car.brand);
        return true;
      }
      return false;
    });
  }

  private filterCarsByCategory(cars: any[]) {
    const filteredCategory: Set<string> = new Set();
    return cars.filter((car: { category: string }) => {
      if (!filteredCategory.has(car.category)) {
        filteredCategory.add(car.category);
        return true;
      }
      return false;
    });
  }
}
