import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { UiMoviesCardsContainerComponent } from './components/ui-movies-cards-container/ui-movies-cards-container.component';
import { UiMovieCardComponent } from './components/ui-movie-card/ui-movie-card.component';
import { UiLoaderComponent } from './components/ui-loader/ui-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    UiMoviesCardsContainerComponent,
    UiMovieCardComponent,
    UiLoaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    UiMoviesCardsContainerComponent,
    UiLoaderComponent,
    NgxSkeletonLoaderModule
  ]
})
export class SharedModule { }
