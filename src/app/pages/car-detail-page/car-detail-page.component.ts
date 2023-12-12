import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent {

  car: any;


  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.car = this.appservice.getCar(
      this.route.snapshot.params['carID']
    );
    console.log(this.car.img);


    // get the name from the car sub 
    //displayed in the brand page and use it as the query for searching the cars

    // create interface for brand and cars with the new data.

    // change bradies to brand and delete brand
  }
}
