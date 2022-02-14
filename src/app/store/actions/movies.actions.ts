import { createAction, props } from '@ngrx/store';
import { Movie } from '@shared/models';

export const loadMovies = createAction(
  '[Movies] Load Movies',
);

export const loadedMovies = createAction(
  '[Movies] Loaded Movies successful',
  props<{ movies: Movie[] }>()
);

