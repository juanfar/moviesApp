import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMoviesCardsContainerComponent } from './components/ui-movies-cards-container/ui-movies-cards-container.component';


@NgModule({
  declarations: [
    UiMoviesCardsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiMoviesCardsContainerComponent
  ]
})
export class SharedModule { }
