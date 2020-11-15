import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { fieldReducer } from '../field/store/field.reducer';
import { matchDetailsReducer } from '../dashboard/store/dashboard.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  fieldState: fieldReducer,
  dashboardState: matchDetailsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
