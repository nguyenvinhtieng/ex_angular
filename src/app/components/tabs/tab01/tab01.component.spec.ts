import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab01Component } from './tab01.component';

describe('Tab01Component', () => {
  let component: Tab01Component;
  let fixture: ComponentFixture<Tab01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tab01Component]
    });
    fixture = TestBed.createComponent(Tab01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
