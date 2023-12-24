import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBrand, IFaq } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css'],
})
export class BrandPageComponent implements OnInit {
  backgroundImg: string = '';
  faq: IFaq[] = [];
  brand: IBrand | undefined;

  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const brandID = this.route.snapshot.params['brandID'];
    this.appservice.getBrand(brandID).subscribe(
      (brand) => {
        this.brand = brand;
      },
      (error) => {
        console.error('Error loading brand:', error);
      }
    );
    
  }

  
}

