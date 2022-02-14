import { createAction, props } from '@ngrx/store';
import { Actor } from '@shared/models';

export const loadActors = createAction(
  '[Actors] Load Actors',
);

export const loadedActors = createAction(
  '[Actors] Loaded Actors successful',
  props<{ actors: Actor[] }>()
);

