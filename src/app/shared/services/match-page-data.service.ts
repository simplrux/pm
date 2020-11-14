import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { FormationType, Player, TeamDetails } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchPageDataService {

  constructor() { }

  getMyTeamData(): Observable<TeamDetails> {
    return of({ teamName: 'Playermaker united', logoImage: 'https://images.app.goo.gl/hzjz74TX6tykwYqP9' });
  }

  getFormationTypes(): Observable<FormationType[]> {
    const formationTypes = [{ id: 1, name: '4-4-2' },
    { id: 2, name: '4-3-3' },
    { id: 3, name: '5-3-2' },
    { id: 4, name: '2-4-4' },
    { id: 5, name: '3-5-2' }];
    return of(formationTypes);
  }

  submitMatch(matchData) {
    console.log(`matchData: ${matchData}`);
  }

  getPlayers(): Observable<Player[]> {

    const players = [{
      id: 1,
      firstName: 'Chavez',
      lastName: 'Goff',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 2,
      firstName: 'Dianna',
      lastName: 'Sexton',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Midfielder'
    },
    {
      id: 3,
      firstName: 'Stefanie',
      lastName: 'Waller',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Striker'
    },
    {
      id: 4,
      firstName: 'Reese',
      lastName: 'Lara',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 5,
      firstName: 'Hood',
      lastName: 'Paul',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 6,
      firstName: 'Raquel',
      lastName: 'Alston',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Midfielder'
    },
    {
      id: 7,
      firstName: 'Workman',
      lastName: 'Valentine',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Striker'
    },
    {
      id: 8,
      firstName: 'Schwartz',
      lastName: 'Christian',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 9,
      firstName: 'Drake',
      lastName: 'Ochoa',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 10,
      firstName: 'Maritza',
      lastName: 'Herrera',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 11,
      firstName: 'Rasmussen',
      lastName: 'Garner',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Striker'
    },
    {
      id: 12,
      firstName: 'Teri',
      lastName: 'Holland',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 13,
      firstName: 'Allison',
      lastName: 'Mcdonald',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 14,
      firstName: 'Cash',
      lastName: 'Drake',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    },
    {
      id: 15,
      firstName: 'Davenport',
      lastName: 'Baker',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 16,
      firstName: 'Kelli',
      lastName: 'Stewart',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Defender'
    },
    {
      id: 17,
      firstName: 'Sweet',
      lastName: 'Keith',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Midfielder'
    },
    {
      id: 18,
      firstName: 'Greer',
      lastName: 'Mosley',
      image: 'http://placehold.it/32x32',
      positionCategory: 'Goalkeeper'
    }];
    return of(players);

  }




}
