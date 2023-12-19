import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustSafetyComponent } from './trust-safety.component';

describe('TrustSafetyComponent', () => {
  let component: TrustSafetyComponent;
  let fixture: ComponentFixture<TrustSafetyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustSafetyComponent]
    });
    fixture = TestBed.createComponent(TrustSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
