import { Injectable } from '@angular/core';
import { CompaniesService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
 
@Injectable()
export class CompaniesEffects {
 
  loadCompanies$ = createEffect(() => this.actions$.pipe(
    ofType('[Companies] Load Companies'),
    mergeMap(() => this.companiesService.getCompanies()
      .pipe(
        map(companies => ({ type: '[Companies] Loaded Companies successful', companies })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService
  ) {}
}