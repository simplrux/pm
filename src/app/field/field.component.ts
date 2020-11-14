import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../shared/models/match';
import { MatchPageDataService } from '../shared/services/match-page-data.service';
import { loadTeam } from './store/field.actions';
import { selectLineup, selectAllPlayers } from './store/field.selectors';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  lineup$: Observable<number[]> = this.store.select(selectLineup);
  allPlayers$: Observable<Player[]> = this.store.select(selectAllPlayers);

  formation = '4421';
  formationRows = [];
  constructor(private store: Store, private ms: MatchPageDataService) {
    this.store.dispatch(loadTeam());
  }

  ngOnInit(): void {
    // this.formationRows = this.formation.length;
    // for (let i = 0; i < this.formation.length; i++) {
    //   this.formationRows.push({ length: Number(this.formation[i]) });
    // }
    for (const char of this.formation) {
      this.formationRows.push({ length: Number(char) });
    }
    // this.store.select(selectLineup).subscribe(x => {
    //   console.log(x);
    // });
  }

}
