import { Component, Input } from '@angular/core';
import { IReview } from 'src/app/directives/app-model';

@Component({
  selector: 'review-sub',
  templateUrl: './review-sub.component.html',
  styleUrls: ['./review-sub.component.css']
})
export class ReviewSubComponent {
  @Input() reviews: any
  // @Input() reviews: IReview[] = [];

}
