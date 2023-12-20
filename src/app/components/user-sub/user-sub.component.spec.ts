import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubComponent } from './user-sub.component';

describe('UserSubComponent', () => {
  let component: UserSubComponent;
  let fixture: ComponentFixture<UserSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSubComponent]
    });
    fixture = TestBed.createComponent(UserSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
