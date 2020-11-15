import { createAction, props } from '@ngrx/store';
import { MatchMetaData } from 'src/app/shared/models/match';

export const loadTeamData = createAction(
  '[Dashboard] Load Team Data'
);

export const loadTeamDataSuccess = createAction(
  '[Dashboard] Load Team Data Success',
  props<{ data: any }>()
);

export const loadTeamDataFailure = createAction(
  '[Dashboard] Load Team Data Failure',
  props<{ error: any }>()
);

export const swapBench = createAction(
  '[Dashboard] Swap Bench',
  props<{ data: { playerId: number, index: number } }>()
);

export const swapLineup = createAction(
  '[Dashboard] Swap Lineup',
  props<{ data: { playerId: number, xy: { x: number; y: number } } }>()
);

export const submitForm = createAction(
  '[Dashboard] Submit Form',
  props<{ data: MatchMetaData }>()
);

export const resetSwap = createAction(
  '[Dashboard] Reset Swap State'
);
