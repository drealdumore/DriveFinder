import { Component, Input } from '@angular/core';
import { SortItem } from 'src/app/directives/app-model';

@Component({
  selector: 'brands',
  templateUrl: 'brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  @Input() brands: SortItem[] | null = [];
  
}
