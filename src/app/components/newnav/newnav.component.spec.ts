import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnavComponent } from './newnav.component';

describe('NewnavComponent', () => {
  let component: NewnavComponent;
  let fixture: ComponentFixture<NewnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewnavComponent]
    });
    fixture = TestBed.createComponent(NewnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
