import { TestBed, inject } from '@angular/core/testing';

import { ChordsService } from './chords.service';

describe('ChordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChordsService]
    });
  });

  it('should be created', inject([ChordsService], (service: ChordsService) => {
    expect(service).toBeTruthy();
  }));
});
