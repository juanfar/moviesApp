import { createReducer, on } from '@ngrx/store';
import { Movie } from '@shared/models';
import { loadedMovies, loadMovies } from '../actions/movies.actions';

export interface MoviesState {
  loading: boolean;
  movies: Movie[]
}

export const initialState: MoviesState = {
  loading: false,
  movies: []
}

export const MoviesReducer = createReducer(
  initialState,
  on(loadMovies, (state) => {
    return {...state, loading: true}
  }),
  on(loadedMovies, (state, { movies }) => {
    return {...state, loading: false, movies}
  })
);