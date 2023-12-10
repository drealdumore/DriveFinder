import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBrands, IFaq } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css'],
})
export class BrandPageComponent implements OnInit {
  brands: IBrands[] = [];
  backgroundImg: string = '';
  faq: IFaq[] = [];
  brand: IBrands | undefined;

  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.brand = this.appservice.getBrand('bmw');
    this.brand = this.appservice.getBrand(this.route.snapshot.params['brandID']);
    console.log(this.brand);

  }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params: Params) => {
  //     const brandId = params['id'];
  //     this.brand = this.appservice.getBrand(brandId);
  //     console.log(this.brand);
  //   });
  // }
}
