import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDemoComponent } from './ngrx-demo.component';

describe('NgrxDemoComponent', () => {
  let component: NgrxDemoComponent;
  let fixture: ComponentFixture<NgrxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
