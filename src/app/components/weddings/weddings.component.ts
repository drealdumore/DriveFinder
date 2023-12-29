import { Component, Input, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css'],
})
export class WeddingsComponent {
  private appService = inject(appService);

  categories$ = this.appService
    .getCategories()
    .pipe(
      map((categories) => categories.filter((category) => category.content))
    );
}
