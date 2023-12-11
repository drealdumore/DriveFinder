import { Component, Input } from '@angular/core';

@Component({
  selector: 'brand-cars',
  templateUrl: './brand-cars.component.html',
  styleUrls: ['./brand-cars.component.css'],
})
export class BrandCarsComponent {
  @Input() cars: any[] | undefined;
}
