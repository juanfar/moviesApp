import { ActionReducerMap } from "@ngrx/store";
import { ActorsReducer, ActorsState, MoviesReducer, MoviesState } from "./reducers";

export interface AppState {
  moviesState: MoviesState;
  actorState: ActorsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  moviesState: MoviesReducer,
  actorState: ActorsReducer,
}