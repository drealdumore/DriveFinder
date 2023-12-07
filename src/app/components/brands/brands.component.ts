import { Component, Input } from '@angular/core';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'brands',
  templateUrl: 'brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  @Input() cars: any[] = [];
  @Input() category: string = '';
}
