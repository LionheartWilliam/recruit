import { TestBed } from '@angular/core/testing';

import { DocIDService } from './doc-id.service';

describe('DocIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocIDService = TestBed.get(DocIDService);
    expect(service).toBeTruthy();
  });
});
