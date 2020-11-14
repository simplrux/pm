import { TestBed } from '@angular/core/testing';

import { MatchPageDataService } from './match-page-data.service';

describe('MatchPageDataService', () => {
  let service: MatchPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
