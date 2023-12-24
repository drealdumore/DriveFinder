import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appService } from 'src/app/services/app.service';
import { BigCategories, IFaq } from 'src/app/directives/app-model';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  category: BigCategories | undefined;

  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const categoryID = this.route.snapshot.params['categoryID'];
    this.appservice.getCategory(categoryID).subscribe(
      (category) => {
        this.category = category;
      },
      (error) => {
        console.error('Error loading category:', error);
      }
    );
  }
}
