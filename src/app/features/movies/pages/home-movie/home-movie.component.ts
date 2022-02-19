import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models';
import { AppState } from '@store/app.state';
import { selectMovies, selectMoviesLoading } from '@store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss']
})
export class HomeMovieComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  movies$: Observable<Movie[]> = new Observable();

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.fetchLoading();
    this.movies$ = this.store.select(selectMovies);
  }

  identify(index: number, movie: Movie) {
    return movie.id;
  }

  fetchLoading(): void {
    this.loading$ = this.store.select(selectMoviesLoading);
  }

}
