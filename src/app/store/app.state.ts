import { ActionReducerMap } from "@ngrx/store";
import { ActorsReducer, ActorsState, CompaniesReducer, CompaniesState, MoviesReducer, MoviesState } from "./reducers";

export interface AppState {
  moviesState: MoviesState;
  actorState: ActorsState;
  companiesState: CompaniesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  moviesState: MoviesReducer,
  actorState: ActorsReducer,
  companiesState: CompaniesReducer,
}