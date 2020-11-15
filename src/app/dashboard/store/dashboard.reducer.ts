import { Action, createReducer, on } from '@ngrx/store';
import { DashboardState, MatchMetaData } from 'src/app/shared/models/match';
import * as DashboardActions from './dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

export interface State {

}

export const initialState: DashboardState = {
  matchMetadata: {
    rivelName: null,
    rivelLogoImage: null,
    score: { myTeam: null, rival: null },
    matchLocation: null
  },
  swaps: {
    tempBench: null,
    tempLineup: null
  }
};

export const matchDetailsReducer = createReducer(
  initialState,
  on(DashboardActions.swapBench, (state, action) => {
    const newSwaps = { ...state.swaps, ...{ tempBench: action.data } };
    return ({ ...state, ...{ swaps: newSwaps } });
  }),
  on(DashboardActions.swapLineup, (state, action) => {
    const newSwaps = { ...state.swaps, ...{ tempLineup: action.data } };
    return ({ ...state, ...{ swaps: newSwaps } });
  }),
  on(DashboardActions.resetSwap, (state, action) => {
    const newSwaps = { ...state.swaps, ...{ tempLineup: null, tempBench: null } };
    return ({ ...state, ...{ swaps: newSwaps } });
  }),
  on(DashboardActions.submitForm, (state, action) => {
    const newState = { ...state, ...{ matchMetadata: action.data } };
    return (newState);
  }),
);

