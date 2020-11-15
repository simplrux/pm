import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPlayers, selectBench, selectLineup } from 'src/app/field/store/field.selectors';
import { Player, Swaps } from 'src/app/shared/models/match';
import { swapBench, swapLineup } from '../../store/dashboard.actions';
import { selectSwaps } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-bench',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenchComponent implements OnInit {

  bench$: Observable<number[]>;
  players$: Observable<Player[]>;
  lineup$: Observable<any[]>;
  swaps$: Observable<Swaps>;
  constructor(private store: Store) {
    this.players$ = this.store.select(selectAllPlayers);
    this.bench$ = this.store.select(selectBench);
    this.lineup$ = this.store.select(selectLineup);
    this.swaps$ = this.store.select(selectSwaps);
  }

  ngOnInit(): void {
  }

  selectPlayer(playerId: number, index: number) {
    this.store.dispatch(swapBench({ data: { playerId, index } }));
  }

  selectLineup(playerId, xy: { x: number, y: number }) {
    this.store.dispatch(swapLineup({ data: { playerId, xy } }));
  }


}
 