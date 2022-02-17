import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMovieCardComponent } from './ui-movie-card.component';

describe('UiMovieCardComponent', () => {
  let component: UiMovieCardComponent;
  let fixture: ComponentFixture<UiMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
