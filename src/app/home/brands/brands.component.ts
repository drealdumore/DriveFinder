import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICars } from 'src/app/app-model';
import { appService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brands',
  templateUrl: 'brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit, OnDestroy {
  // cars: ICars[] = [];
  cars: any[] = [];
  errorMessage: string = '';
  private sub!: Subscription;

  constructor(private appService: appService) {}

  ngOnInit(): void {
    // this.sub = this.appService.getCars().subscribe({
    //   next: (cars) => {
    //     this.cars = cars;
    //     console.log(cars);
    //   },
    //   error: (err) => {
    //     this.errorMessage = err;
    //     console.error(err);
    //   },
    // });

   this.cars = this.appService.getCars()
   console.log(this.cars);
   
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
