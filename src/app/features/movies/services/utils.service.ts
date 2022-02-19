import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '@shared/models';
import { AppState } from '@store/app.state';
import { selectMovies, selectMoviesLoading } from '@store/selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.store.select(selectMovies);
  }

  getMovieLoadingStatus(): Observable<boolean> {
    return this.store.select(selectMoviesLoading);
  }
}
