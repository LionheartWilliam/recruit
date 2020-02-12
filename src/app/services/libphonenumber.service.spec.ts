import { TestBed } from '@angular/core/testing';

import { LibphonenumberService } from './libphonenumber.service';

describe('LibphonenumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibphonenumberService = TestBed.get(LibphonenumberService);
    expect(service).toBeTruthy();
  });
});
