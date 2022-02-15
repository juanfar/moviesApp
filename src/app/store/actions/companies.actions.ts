import { createAction, props } from '@ngrx/store';
import { Company } from '@shared/models';

export const loadCompanies = createAction(
  '[Companies] Load Companies',
);

export const loadedCompanies = createAction(
  '[Companies] Loaded Companies successful',
  props<{ companies: Company[] }>()
);

