import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FieldActions from './field.actions';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';
import { Players } from 'src/app/shared/models/match';

@Injectable()
export class FieldEffects {

  loadFields$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FieldActions.loadTeam),
      concatMap(() =>
        this.ms.getPlayers().pipe(
          map(data => {
            const players: Players = { allPlayers: data, bench: [], lineup: [] };
            data.forEach((player, index) => {
              index >= 0 && index < 11 ? players.lineup.push(player.id) : players.bench.push(player.id);
            });
            return FieldActions.loadTeamSuccess({ data: players });
          }),
          catchError(error => of(FieldActions.loadTeamFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private ms: MatchPageDataService) { }

}
