import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-heading',
  template: ` <h2 class="section__heading"><ng-content></ng-content></h2>`,
  styles: [
    `
      .section__heading {
        font-size: 2.5rem;
        text-align: center;
        color: var(--color-white);
        background: linear-gradient(hsl(0 0% 10%), hsl(0 0% 60%));
        background-clip: border-box;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    `,
  ],
})
export class SectionHeadingComponent {
  @Input() title: string = '';
}
