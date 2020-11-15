import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<fromDashboard.State>(
  fromDashboard.dashboardFeatureKey
);

const selectAppState = (state: any): any => state;

export const selectSwaps = createSelector(
  (state: any) => state.dashboardState.swaps,
  selectAppState
);

export const selectApp = createSelector(
  (state: any) => state,
  selectAppState
);
