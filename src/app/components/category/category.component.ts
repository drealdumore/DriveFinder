import { Component, Input } from '@angular/core';
import { SortItem } from 'src/app/directives/app-model';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() categories: SortItem[] | null = [];
}
