import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMoviesCardsContainerComponent } from './ui-movies-cards-container.component';

describe('UiMoviesCardsContainerComponent', () => {
  let component: UiMoviesCardsContainerComponent;
  let fixture: ComponentFixture<UiMoviesCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMoviesCardsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMoviesCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
