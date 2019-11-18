import { TestBed } from '@angular/core/testing';

import { UnicornService } from './unicorn.service';

describe('UnicornService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornService = TestBed.get(UnicornService);
    expect(service).toBeTruthy();
  });
});
