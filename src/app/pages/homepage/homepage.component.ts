import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaq, IReview, SortItem } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  reviews$: Observable<IReview[]> | undefined;
  faq$: Observable<IFaq[]> | undefined;
  sortByCategory: boolean = false;
  sortByBrands: boolean = true;

  filteredCars$: Observable<SortItem[]> | undefined;
  categorizedCars$: Observable<SortItem[]> | undefined;

  constructor(private appService: appService) {}

  ngOnInit(): void {
    this.reviews$ = this.appService.getReviews();

    this.categorizedCars$ = this.appService.getCategories();
    this.filteredCars$ = this.appService.getBrandcategory();

    this.faq$ = this.appService.getFaq();
  }
}
