import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActorsService } from '@core/services';
 
@Injectable()
export class ActorsEffects {
 
  loadActors$ = createEffect(() => this.actions$.pipe(
    ofType('[Actors] Load Actors'),
    mergeMap(() => this.actorsService.getActors()
      .pipe(
        map(actors => ({ type: '[Actors] Loaded Actors successful', actors })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private actorsService: ActorsService
  ) { }
}