import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  items = [
    {
      title: 'Why is the moon sometimes out during the day?',
      content: 'Lorem ipsum...',
      expanded: false,
    },
    {
      title: 'Why is the sky blue?',
      content: 'Lorem ipsum...',
      expanded: false,
    },
    {
      title: 'Will we ever discover aliens?',
      content: 'Lorem ipsum...',
      expanded: false,
    },
    {
      title: 'How much does the Earth weigh?',
      content: 'Lorem ipsum...',
      expanded: false,
    },
    {
      title: 'How do airplanes stay up?',
      content: 'Lorem ipsum...',
      expanded: false,
    },
  ];

  toggleAccordion(index: number): void {
    this.items.forEach((item, i) => {
      if (i === index) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
    });
  }
}
