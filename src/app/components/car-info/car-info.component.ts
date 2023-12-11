import { Component, Input } from '@angular/core';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent {
  @Input() cars: any[] | undefined;

}
