import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornDetailComponent } from './unicorn-detail.component';

describe('UnicornDetailComponent', () => {
  let component: UnicornDetailComponent;
  let fixture: ComponentFixture<UnicornDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
