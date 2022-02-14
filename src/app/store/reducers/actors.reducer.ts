import { createReducer, on } from '@ngrx/store';
import { Actor } from '@shared/models';
import { loadActors, loadedActors } from '../actions/actors.action';

export interface ActorsState {
  loading: boolean;
  actors: Actor[]
}

export const actorsInitialState: ActorsState = {
  loading: false,
  actors: []
}

export const ActorsReducer = createReducer(
  actorsInitialState,
  on(loadActors, (state) => {
    return {...state, loading: true}
  }),
  on(loadedActors, (state, { actors }) => {
    return {...state, loading: false, actors}
  })
);