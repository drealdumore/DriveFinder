import { Component, OnInit } from '@angular/core';
import { IBrands } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css'],
})
export class BrandPageComponent implements OnInit {
  brands: IBrands[] = [];
  title: string = 'Rent a brandName';
  backgroundImg: string = '../../../assets/img/benz/benz-main.jpg';

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
  constructor(private appservice: appService) {}

  ngOnInit(): void {
    this.brands = this.appservice.getBrands();
    console.log(this.brands);
  }
}
