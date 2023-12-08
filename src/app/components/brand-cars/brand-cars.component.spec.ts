import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCarsComponent } from './brand-cars.component';

describe('BrandCarsComponent', () => {
  let component: BrandCarsComponent;
  let fixture: ComponentFixture<BrandCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandCarsComponent]
    });
    fixture = TestBed.createComponent(BrandCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
