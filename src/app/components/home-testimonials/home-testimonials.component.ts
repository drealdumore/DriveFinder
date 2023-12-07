import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/app-model';

@Component({
  selector: 'home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css'],
})
export class HomeTestimonialsComponent {
  @Input() reviews: IReview[] = [];

  
}
