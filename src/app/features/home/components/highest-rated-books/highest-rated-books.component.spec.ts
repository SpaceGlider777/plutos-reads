import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatedBooksComponent } from './highest-rated-books.component';

describe('HighestRatedBooksComponent', () => {
  let component: HighestRatedBooksComponent;
  let fixture: ComponentFixture<HighestRatedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestRatedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestRatedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
