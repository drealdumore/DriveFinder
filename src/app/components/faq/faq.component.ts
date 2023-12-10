import { Component, Input } from '@angular/core';
import { appService } from '../../services/app.service';
import { IFaq } from '../../directives/app-model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  @Input() items: IFaq[] | undefined;

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

  constructor(private appService: appService) {
    this.items = this.appService.getFaq();
  }
}
