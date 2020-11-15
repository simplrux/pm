import {  createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromField from './field.reducer';


const selectAppState = (state: any): any => state;

export const selectFieldState = createFeatureSelector<fromField.State>(
  fromField.fieldFeatureKey
);
export const selectPlayers = createSelector(
  (state: any) => state.fieldState,
  selectAppState
);
export const selectLineup = createSelector(
  (state: any) => state.fieldState.players.lineup,
  selectAppState
);
export const selectBench = createSelector(
  (state: any) => state.fieldState.players.bench,
  selectAppState
);
export const selectAllPlayers = createSelector(
  (state: any) => state.fieldState.players.allPlayers,
  selectAppState
);
export const selectedFormation = createSelector(
  (state: any) => state.fieldState.selectedFormation,
  selectAppState
);

