
import { createSelector } from '@ngrx/store';
import { ActorsState } from '../reducers/actors.reducer';
import { AppState } from '../app.state';
 
export const selectActorsFeature = (state: AppState) => state.actorState;

export const selectActors = createSelector(
  selectActorsFeature,
  (state: ActorsState) => state.actors
);

export const selectActorsLoading = createSelector(
  selectActorsFeature,
  (state: ActorsState) => state.loading
);
