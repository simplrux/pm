import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFormation } from 'src/app/field/store/field.actions';
import { State } from 'src/app/field/store/field.reducer';
import { selectedFormation } from 'src/app/field/store/field.selectors';
import { FormationType } from 'src/app/shared/models/match';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  //  ideally, if formationTypes is actual data
  formationTypes$: Observable<FormationType[]>;
  selectedFormation$: Observable<string>;
  // selectedFormation
  constructor(private ms: MatchPageDataService, private store: Store) {
    this.formationTypes$ = this.ms.getFormationTypes();
    this.selectedFormation$ = this.store.select(selectedFormation);
   }

  ngOnInit(): void {
  }

  selectFormation(name: string) {
    this.store.dispatch(selectFormation({ data: name }));
  }

}
