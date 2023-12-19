import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ICars, IReview } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  templateUrl: 'homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  reviews$: Observable<IReview[]> | undefined;

  filteredCars: any[] = [];
  categorizedCars: any[] = [];

  constructor(private appService: appService) {}

  ngOnInit(): void {
    this.reviews$ = this.appService.getReviews().pipe(tap(data => console.log(data)
    ))
    
    this.categorizedCars = this.appService.getCategories();
    this.filteredCars = this.appService.getbrandcategory();
  }
}
