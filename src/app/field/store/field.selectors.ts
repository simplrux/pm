import {  createSelector } from '@ngrx/store';

const getFieldState = (state: any): any => state;

export const selectLineup = createSelector(
  (state: any) => state.fieldState.players.lineup,
  getFieldState
);
export const selectAllPlayers = createSelector(
  (state: any) => state.fieldState.players.allPlayers,
  getFieldState
);
