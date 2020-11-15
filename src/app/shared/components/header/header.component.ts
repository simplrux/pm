import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDetails } from '../../models/match';
import { MatchPageDataService } from '../../services/match-page-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // ideally, this would be a server call using ngrx effects$, since its client only
  // I prefer to have it decoupled from the app's state
  
  teamData$: Observable<TeamDetails>;

  constructor(private ms: MatchPageDataService) {
    this.teamData$ = this.ms.getMyTeamData();
  }

  ngOnInit(): void {
  }

}
