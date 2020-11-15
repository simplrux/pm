import { Action, createReducer, on } from '@ngrx/store';
import { MatchData, Players } from 'src/app/shared/models/match';
import * as FieldActions from './field.actions';

export const fieldFeatureKey = 'fieldState';

export interface State {

}

export const initialState: MatchData = {
  selectedFormation: '4-4-2',
  players: {
    allPlayers: [],
    lineup: [],
    bench: []
  },
};


export const fieldReducer = createReducer(
  initialState,

  on(FieldActions.swap, (state, action) => {

    const x = action.data.tempLineup.xy.x;
    const y = [...state.players.lineup[action.data.tempLineup.xy.x]];
    y[action.data.tempLineup.xy.y] = action.data.tempBench.playerId;
    const nb = [
      ...state.players.bench
    ];
    nb[action.data.tempBench.index] = action.data.tempLineup.playerId;
    const nl = [
      ...state.players.lineup.slice(0, x), Object.assign([],
        state.players.lineup[x], y),
      ...state.players.lineup.slice(x + 1)
    ];
    const newState = {
      ...state, ...{ players: { bench: nb, lineup: nl, allPlayers: state.players.allPlayers } },
    };
    return (newState);
  }),
  on(FieldActions.selectFormation, (state, action) => {
    const newLineup = lineupToFormation(action.data, state.players.lineup);
    const newState = { selectedFormation: action.data, players: { ...state.players, ...{ lineup: newLineup } } };
    return (newState);
  }),
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

const lineupToFormation = (formation: string, lineup: any[]) => {
  const flatten = flattenArray(lineup);
  const str = formation.replace(/-/g, '');
  const formArr = [...str];
  const newForm = [];
  let sum = 0;
  const first = flattenArray([lineup[lineup.length - 1]]);
  newForm.push(first);
  formArr.forEach((x, y) => {
    let newLineup = {};
    sum += Number(x);
    if (y > 0 && y < formArr.length - 1) {
      newLineup = flatten.filter((player, idx) => idx < sum && idx >= Number(formArr[y - 1]));
    } else if (y !== formArr.length - 1) {
      newLineup = flatten.filter((player, idx) => idx < sum);
    } else if (y === formArr.length - 1) {
      newLineup = flatten.filter((player, idx) => idx < sum && idx >= sum - Number(x));
    }
    newForm.push(newLineup);
  });
  return newForm.reverse();
};

const flattenArray = (arr: any[]) => {
  return [].concat.apply([], arr);
};


