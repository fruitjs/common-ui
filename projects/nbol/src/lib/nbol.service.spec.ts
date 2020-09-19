import { TestBed } from '@angular/core/testing';

import { NbolService } from './nbol.service';

describe('NbolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbolService = TestBed.get(NbolService);
    expect(service).toBeTruthy();
  });
});
