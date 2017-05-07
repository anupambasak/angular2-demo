import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoute3Component } from './child-route3.component';

describe('ChildRoute3Component', () => {
  let component: ChildRoute3Component;
  let fixture: ComponentFixture<ChildRoute3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRoute3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRoute3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
