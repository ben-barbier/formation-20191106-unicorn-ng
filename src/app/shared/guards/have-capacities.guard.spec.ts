import { TestBed, async, inject } from '@angular/core/testing';

import { HaveCapacitiesGuard } from './have-capacities.guard';

describe('HaveCapacitiesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaveCapacitiesGuard]
    });
  });

  it('should ...', inject([HaveCapacitiesGuard], (guard: HaveCapacitiesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
