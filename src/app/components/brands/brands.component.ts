import { Component, Input } from '@angular/core';
import { SortItem } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'brands',
  templateUrl: 'brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  @Input() brands: SortItem[] | null = [];
  
}
