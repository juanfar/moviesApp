import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { HomeMovieComponent } from './pages/home-movie/home-movie.component';
import { NewMovieComponent } from './pages/new-movie/new-movie.component';

const routes: Routes = [
  { path: '', component: HomeMovieComponent },
  { path: 'detail-movie', component: DetailMovieComponent },
  { path: 'new-movie', component: NewMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }