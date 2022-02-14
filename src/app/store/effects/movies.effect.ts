import { Injectable } from '@angular/core';
import { MoviesService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
 
@Injectable()
export class MoviesEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies] Load Movies'),
    mergeMap(() => this.moviesService.getMovies()
      .pipe(
        map(movies => ({ type: '[Movies] Loaded Movies successful', movies })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}