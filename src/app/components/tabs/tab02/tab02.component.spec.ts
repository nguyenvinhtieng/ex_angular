import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab02Component } from './tab02.component';

describe('Tab02Component', () => {
  let component: Tab02Component;
  let fixture: ComponentFixture<Tab02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tab02Component]
    });
    fixture = TestBed.createComponent(Tab02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
