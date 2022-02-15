import { createReducer, on } from '@ngrx/store';
import { Company } from '@shared/models';
import { loadCompanies, loadedCompanies } from '../actions/companies.actions';

export interface CompaniesState {
  loading: boolean;
  companies: Company[]
}

export const companiesInitialState: CompaniesState = {
  loading: false,
  companies: []
}

export const CompaniesReducer = createReducer(
  companiesInitialState,
  on(loadCompanies, (state) => {
    return {...state, loading: true}
  }),
  on(loadedCompanies, (state, { companies }) => {
    return {...state, loading: false, companies}
  })
);