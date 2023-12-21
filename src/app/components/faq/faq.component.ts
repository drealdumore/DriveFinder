import { Component, Input } from '@angular/core';
import { IFaq } from '../../directives/app-model';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  @Input()
  items: IFaq[] | null | undefined= [];

  toggleAccordion(index: number): void {
    if (this.items) {
      this.items.forEach((item, i) => {
        if (i === index) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }
      });
    }
  }
}
