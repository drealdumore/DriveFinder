import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css'],
})
export class CarInfoComponent {
  @Input() car: any;
}
