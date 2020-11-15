import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { resetSwap, swapLineup } from '../dashboard/store/dashboard.actions';
import { selectSwaps } from '../dashboard/store/dashboard.selectors';
import { Player, Swaps } from '../shared/models/match';
import { MatchPageDataService } from '../shared/services/match-page-data.service';
import { loadTeam, selectFormation, swap } from './store/field.actions';
import { selectAllPlayers, selectLineup } from './store/field.selectors';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, OnDestroy {

  lineup$: Observable<Player[]>;
  formation$ = new BehaviorSubject<any[]>([]);
  allPlayers$: Observable<Player[]>;
  swaps$: Observable<Swaps>;
  sub: Subscription;

  constructor(private store: Store, private ms: MatchPageDataService) {
    this.store.dispatch(loadTeam());
    this.lineup$ = this.store.select(selectLineup);
    this.allPlayers$ = this.store.select(selectAllPlayers);
    this.swaps$ = this.store.select(selectSwaps);
    this.sub = this.swaps$.subscribe((data: Swaps) => {
      if (data.tempBench && data.tempLineup) {
        const tempBench = data.tempBench;
        const tempLineup = data.tempLineup;
        this.store.dispatch(swap({ data: { tempBench, tempLineup } }));
        this.store.dispatch(resetSwap());
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(selectFormation({ data: '4-3-3' }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  selectPlayer(playerId, xy: { x: number, y: number }) {
    this.store.dispatch(swapLineup({ data: { playerId, xy } }));
  }

  getNum(num: string) {
    return Number(num);
  }
}
