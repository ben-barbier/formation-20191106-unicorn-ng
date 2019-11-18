import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornListComponent } from './unicorn-list.component';

describe('UnicornListComponent', () => {
  let component: UnicornListComponent;
  let fixture: ComponentFixture<UnicornListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
