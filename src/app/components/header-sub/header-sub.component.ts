import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.css'],
})
export class HeaderSubComponent {
  @Input() title: string | undefined ;
  @Input() imgUrl: string | undefined;
}
