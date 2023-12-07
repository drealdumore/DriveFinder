import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubComponent } from './search-sub.component';

describe('SearchSubComponent', () => {
  let component: SearchSubComponent;
  let fixture: ComponentFixture<SearchSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSubComponent]
    });
    fixture = TestBed.createComponent(SearchSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
