import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SortItem } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css'],
})
export class WeddingsComponent implements OnInit {
  categories$: Observable<SortItem[]> | undefined;

  constructor(private appService: appService) {}

  ngOnInit(): void {
    this.categories$ = this.appService
      .getCategories()
      .pipe(
        map((categories) => categories.filter((category) => category.content))
      );
  }
}
