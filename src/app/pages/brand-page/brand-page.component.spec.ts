import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPageComponent } from './brand-page.component';

describe('BrandPageComponent', () => {
  let component: BrandPageComponent;
  let fixture: ComponentFixture<BrandPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandPageComponent]
    });
    fixture = TestBed.createComponent(BrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
