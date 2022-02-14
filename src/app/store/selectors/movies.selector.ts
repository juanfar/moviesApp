
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MoviesState } from '../reducers/movies.reducer';
 
export const selectMoviesFeature = (state: AppState) => state.moviesState;

export const selectMovies = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.movies
);

export const selectMoviesLoading = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.loading
);
