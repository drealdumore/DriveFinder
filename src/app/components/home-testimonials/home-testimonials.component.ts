import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from 'src/app/directives/app-model';

@Component({
  selector: 'home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css'],
})
export class HomeTestimonialsComponent {
  // @Input() reviews: IReview[] = [];
  @Input() reviews: any

}
