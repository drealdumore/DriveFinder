import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICars } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent {
  car$: Observable<ICars> | undefined;

  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const carID = this.route.snapshot.params['carID']
    this.car$ = this.appservice.getCar(carID)
  }
}
