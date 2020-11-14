import { Component, OnInit } from '@angular/core';
import { MatchPageDataService } from 'src/app/shared/services/match-page-data.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  //  ideally, if formationTypes is actual data
  formationTypes$ = this.ms.getFormationTypes();

  constructor(private ms: MatchPageDataService) { }

  ngOnInit(): void {
  }

}
