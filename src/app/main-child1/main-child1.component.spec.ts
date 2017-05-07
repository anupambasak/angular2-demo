import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChild1Component } from './main-child1.component';

describe('MainChild1Component', () => {
  let component: MainChild1Component;
  let fixture: ComponentFixture<MainChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
