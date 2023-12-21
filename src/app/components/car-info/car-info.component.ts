import { Component, Input, OnInit } from '@angular/core';
import { ICars } from 'src/app/directives/app-model';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css'],
})
export class CarInfoComponent {
  @Input() car: ICars | null | undefined;
}
