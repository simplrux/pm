import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { fieldReducer } from '../field/store/field.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  fieldState: fieldReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
