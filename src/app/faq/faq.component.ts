import { Component } from '@angular/core';
import { appService } from '../services/app.service';
import { IFaq } from '../app-model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  items: IFaq[] = [];

  toggleAccordion(index: number): void {
    this.items.forEach((item, i) => {
      if (i === index) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
    });
  }

  constructor(private appService: appService) {
    this.items = this.appService.getFaq();
  }
}
