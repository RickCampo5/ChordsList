import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAndFooterComponent } from './nav-and-footer.component';

describe('NavAndFooterComponent', () => {
  let component: NavAndFooterComponent;
  let fixture: ComponentFixture<NavAndFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAndFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
