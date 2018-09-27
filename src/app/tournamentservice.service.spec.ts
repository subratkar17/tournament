import { TestBed, inject } from '@angular/core/testing';

import { TournamentserviceService } from './tournamentservice.service';

describe('TournamentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentserviceService]
    });
  });

  it('should be created', inject([TournamentserviceService], (service: TournamentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
