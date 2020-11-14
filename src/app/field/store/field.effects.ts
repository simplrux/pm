import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FieldActions from './field.actions';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';
import { Players } from 'src/app/shared/models/match';



@Injectable()
export class FieldEffects {

  loadFields$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FieldActions.loadTeam),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ms.getPlayers().pipe(
          map(data => {

            const newData: Players = { allPlayers: data, bench: [], lineup: [] };

            // lets assume there are previous initial lineup settings =)
            data.forEach((item, index) => {
              item.id > 11 ? newData.bench.push(item.id) : newData.lineup.push(item.id);
            });
            console.log(newData);
            return FieldActions.loadTeamSuccess({ data: newData });
          }),
          catchError(error => of(FieldActions.loadTeamFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private ms: MatchPageDataService) { }

}
