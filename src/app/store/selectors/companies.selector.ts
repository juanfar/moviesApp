
import { createSelector } from '@ngrx/store';
import { CompaniesState } from '../reducers';
import { AppState } from '../app.state';
 
export const selectCompaniesFeature = (state: AppState) => state.companiesState;

export const selectCompanies = createSelector(
  selectCompaniesFeature,
  (state: CompaniesState) => state.companies
);

export const selectCompaniesLoading = createSelector(
  selectCompaniesFeature,
  (state: CompaniesState) => state.loading
);
