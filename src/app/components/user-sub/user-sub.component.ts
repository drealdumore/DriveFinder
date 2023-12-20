import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-sub',
  templateUrl: './user-sub.component.html',
  styleUrls: ['./user-sub.component.css']
})
export class UserSubComponent {
  @Input() userData: [] = []

}
