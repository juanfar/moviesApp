import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { UiMoviesCardsContainerComponent } from './components/ui-movies-cards-container/ui-movies-cards-container.component';
import { UiMovieCardComponent } from './components/ui-movie-card/ui-movie-card.component';


@NgModule({
  declarations: [
    UiMoviesCardsContainerComponent,
    UiMovieCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    UiMoviesCardsContainerComponent
  ]
})
export class SharedModule { }
