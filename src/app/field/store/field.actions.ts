import { createAction, props } from '@ngrx/store';
import { Players, Swaps } from 'src/app/shared/models/match';

export const loadTeam = createAction(
  '[Field] Load Team'
);

export const loadTeamSuccess = createAction(
  '[Field] Load Team Success',
  props<{ data: Players }>()
);

export const loadTeamFailure = createAction(
  '[Field] Load Team Failure',
  props<{ error: any }>()
);

export const selectFormation = createAction(
  '[Field] Select Formation',
  props<{ data: string }>()
);

export const swap = createAction(
  '[Field] Swap',
  props<{ data: Swaps }>()
);
