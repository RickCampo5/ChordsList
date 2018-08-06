import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChordsComponent } from './list-chords.component';

describe('ListChordsComponent', () => {
  let component: ListChordsComponent;
  let fixture: ComponentFixture<ListChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
