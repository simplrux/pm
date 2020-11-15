import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {  of } from 'rxjs';

import * as DashboardActions from './dashboard.actions';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';



@Injectable()
export class DashboardEffects {

  // nothing server related is happening in the dashboards state, therefore I skipped this effect
  // loadDashboards$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(DashboardActions.loadTeamData),
  //     concatMap(() =>
  //       this.ms.getMyTeamData().pipe(
  //         map(data => DashboardActions.loadTeamDataSuccess({ data })),
  //         catchError(error => of(DashboardActions.loadTeamDataFailure({ error })))
  //         )
  //     )
  //   );
  // });

  constructor(private actions$: Actions, private ms: MatchPageDataService) {}

}
