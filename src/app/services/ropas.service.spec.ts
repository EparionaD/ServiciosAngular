import { TestBed } from '@angular/core/testing';

import { RopasService } from './ropas.service';

describe('RopasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RopasService = TestBed.get(RopasService);
    expect(service).toBeTruthy();
  });
});
