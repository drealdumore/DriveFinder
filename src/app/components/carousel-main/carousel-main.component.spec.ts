import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMainComponent } from './carousel-main.component';

describe('CarouselMainComponent', () => {
  let component: CarouselMainComponent;
  let fixture: ComponentFixture<CarouselMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselMainComponent]
    });
    fixture = TestBed.createComponent(CarouselMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
