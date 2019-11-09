import { TestBed } from '@angular/core/testing';

import { TurkishService } from './turkish.service';

describe('TurkishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurkishService = TestBed.get(TurkishService);
    expect(service).toBeTruthy();
  });
});
