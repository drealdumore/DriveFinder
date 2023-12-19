import { Component, Input, OnInit } from '@angular/core';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css'],
})
export class WeddingsComponent implements OnInit {
  categories: any[] = [];

  constructor(private appService: appService) {}

  ngOnInit(): void {
    this.categories = this.appService
      .getCategories()
      .filter((item) => item.content);
  }
}
