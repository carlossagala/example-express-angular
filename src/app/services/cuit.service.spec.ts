import { TestBed } from '@angular/core/testing';

import { CuitService } from './cuit.service';

describe('CuitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuitService = TestBed.get(CuitService);
    expect(service).toBeTruthy();
  });
});
