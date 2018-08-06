import { TestBed, inject } from '@angular/core/testing';

import { UpfirebaseService } from './upfirebase.service';

describe('UpfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpfirebaseService]
    });
  });

  it('should be created', inject([UpfirebaseService], (service: UpfirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
