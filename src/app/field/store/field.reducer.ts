import { Action, createReducer, on } from '@ngrx/store';
import { MatchData, Players } from 'src/app/shared/models/match';
import * as FieldActions from './field.actions';

export const fieldFeatureKey = 'fieldState';

// export interface State {

// }

export const initialState: MatchData = {
  matchMetadata: {
    rivelName: null,
    rivelLogoImage: null,
    score: { myTeam: null, rival: null },
    matchLocation: null
  },
  selectedFormation: null,
  players: {
    allPlayers: [],
    lineup: [],
    bench: []
  },

};


export const fieldReducer = createReducer(
  initialState,

  on(FieldActions.loadTeam, state => {
    return (state);
  }),
  on(FieldActions.loadTeamSuccess, (state, action) => {
    const newPlayers: Players = {
      allPlayers: action.data.allPlayers,
      bench: action.data.bench, lineup: action.data.lineup
    };
    const newState = {
      ...state, ...{
        players:
          { ...state.players, ...newPlayers }
      }
    };
    return (newState);
  }),
  on(FieldActions.loadTeamFailure, (state, action) => state),

);

