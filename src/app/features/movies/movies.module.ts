import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movie-routing.module';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { HomeMovieComponent } from './pages/home-movie/home-movie.component';
import { NewMovieComponent } from './pages/new-movie/new-movie.component';

@NgModule({
  declarations: [
    DetailMovieComponent,
    HomeMovieComponent,
    NewMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
