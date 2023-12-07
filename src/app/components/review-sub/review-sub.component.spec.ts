import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubComponent } from './review-sub.component';

describe('ReviewSubComponent', () => {
  let component: ReviewSubComponent;
  let fixture: ComponentFixture<ReviewSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewSubComponent]
    });
    fixture = TestBed.createComponent(ReviewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
