import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailPageComponent } from './car-detail-page.component';

describe('CarDetailPageComponent', () => {
  let component: CarDetailPageComponent;
  let fixture: ComponentFixture<CarDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDetailPageComponent]
    });
    fixture = TestBed.createComponent(CarDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
