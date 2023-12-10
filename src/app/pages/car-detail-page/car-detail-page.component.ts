import { Component } from '@angular/core';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent {
  images = [
    {
      img: './assets/img/benz/benz-main.jpg',
      alt: 'Find the perfect car to try before you buy',
    },
    {
      img: './assets/img/bmw/bmw-main.jpg',
      alt: 'Find the perfect car to try before you buy',
    },
    {
      img: './assets/img/lexus/lexus-main.jpg',
      alt: 'Find the perfect car to try before you buy',
    },
  ];
}
