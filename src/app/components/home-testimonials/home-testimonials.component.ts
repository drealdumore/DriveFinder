import { Component } from '@angular/core';
import { IReview } from 'src/app/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css'],
})
export class HomeTestimonialsComponent {
  reviews: IReview[] = [];

  constructor(private appService: appService) {
    this.reviews = this.appService.getReviews();
  }
}
