import { TestBed } from '@angular/core/testing';

import { CapacitiesService } from './capacities.service';

describe('CapacitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacitiesService = TestBed.get(CapacitiesService);
    expect(service).toBeTruthy();
  });
});
