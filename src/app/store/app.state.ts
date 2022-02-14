import { ActionReducerMap } from "@ngrx/store";
import { MoviesReducer, MoviesState } from "./reducers/movies.reducer";

export interface AppState {
  moviesState: MoviesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  moviesState: MoviesReducer,
}