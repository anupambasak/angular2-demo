import { TestBed, inject } from '@angular/core/testing';

import { CounterDataService } from './counter-data.service';

describe('CounterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterDataService]
    });
  });

  it('should ...', inject([CounterDataService], (service: CounterDataService) => {
    expect(service).toBeTruthy();
  }));
});
