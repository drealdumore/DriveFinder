import { Component } from '@angular/core';
import { IFaq } from '../../directives/app-model';

@Component({
  selector: 'trust-safety',
  templateUrl: './trust-safety.component.html',
  styleUrls: ['./trust-safety.component.css']
})
export class TrustSafetyComponent {
  title: string = 'Travel safely';
  backgroundImg: string = 'assets/img/resources/trust-&-safety.jpeg';

  faq: IFaq[] = [];

}
