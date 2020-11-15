import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { selectApp } from 'src/app/dashboard/store/dashboard.selectors';
import { FormationType, MatchDataJson, Player, TeamDetails } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchPageDataService {

  constructor(private store: Store) { }

  getMyTeamData(): Observable<TeamDetails> {
    const teamData = { teamName: 'Playermaker united', logoImage: 'assets/images/myteam.jpg' };
    return of(teamData);
  }

  getFormationTypes(): Observable<FormationType[]> {
    const formationTypes = [{ id: 1, name: '4-4-2' },
    { id: 2, name: '4-3-3' },
    { id: 3, name: '5-3-2' },
    { id: 4, name: '2-4-4' },
    { id: 5, name: '3-5-2' },
    { id: 2, name: '2-3-5' },
    { id: 3, name: '3-4-3' },
    { id: 4, name: '3-2-5' },
    { id: 5, name: '5-5' }
    ];
    return of(formationTypes);
  }

  submitMatch() {

    // I'd rather grab the json data from the state then passing it as a parameter

    this.store.select(selectApp).pipe(take(1), map(data => {

      // and heres the finalized object =)

      const objToPost = {
        matchMetadata: data.dashboardState.matchMetadata,
        ...data.fieldState
      };

      console.log(objToPost);

    })).subscribe();
  }

  getPlayers(): Observable<Player[]> {

    const players = [{
      id: 1,
      firstName: 'Chavez',
      lastName: 'Goff',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 2,
      firstName: 'Dianna',
      lastName: 'Sexton',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      positionCategory: 'Midfielder'
    },
    {
      id: 3,
      firstName: 'Stefanie',
      lastName: 'Waller',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      positionCategory: 'Striker'
    },
    {
      id: 4,
      firstName: 'Reese',
      lastName: 'Lara',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 5,
      firstName: 'Hood',
      lastName: 'Paul',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 6,
      firstName: 'Raquel',
      lastName: 'Alston',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      positionCategory: 'Midfielder'
    },
    {
      id: 7,
      firstName: 'Workman',
      lastName: 'Valentine',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      positionCategory: 'Striker'
    },
    {
      id: 8,
      firstName: 'Schwartz',
      lastName: 'Christian',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 9,
      firstName: 'Drake',
      lastName: 'Ochoa',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 10,
      firstName: 'Maritza',
      lastName: 'Herrera',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 11,
      firstName: 'Rasmussen',
      lastName: 'Garner',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      positionCategory: 'Striker'
    },
    {
      id: 12,
      firstName: 'Teri',
      lastName: 'Holland',
      image: 'https://randomuser.me/api/portraits/men/13.jpg',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 13,
      firstName: 'Allison',
      lastName: 'Mcdonald',
      image: 'https://randomuser.me/api/portraits/women/14.jpg',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 14,
      firstName: 'Cash',
      lastName: 'Drake',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 15,
      firstName: 'Davenport',
      lastName: 'Baker',
      image: 'https://randomuser.me/api/portraits/women/16.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 16,
      firstName: 'Kelli',
      lastName: 'Stewart',
      image: 'https://randomuser.me/api/portraits/men/17.jpg',
      positionCategory: 'Defender'
    },
    {
      id: 17,
      firstName: 'Sweet',
      lastName: 'Keith',
      image: 'https://randomuser.me/api/portraits/women/18.jpg',
      positionCategory: 'Midfielder'
    },
    {
      id: 18,
      firstName: 'Greer',
      lastName: 'Mosley',
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
      positionCategory: 'Goalkeeper'
    }];
    return of(players);

  }




}
