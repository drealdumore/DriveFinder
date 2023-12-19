import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaq, IReview } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
})
export class HowItWorksComponent implements OnInit {
  reviews$: Observable<IReview[]> | undefined;
  title: string = 'How DriveFinder works';
  backgroundImg: string = 'assets/img/bmw/bmw-main.jpg';

  faq: IFaq[] = [];

  constructor(private appService: appService) {}

  ngOnInit(): void {
    this.reviews$ = this.appService.getSubReviews();
    this.faq = this.appService.getFaq();
  }
}
