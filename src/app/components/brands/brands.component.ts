import { Component, Input } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: 'brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  @Input() cars: any[] = [];
  
}
