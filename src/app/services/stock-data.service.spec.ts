/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockDataService } from './stock-data.service';

describe('Service: StockData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockDataService]
    });
  });

  it('should ...', inject([StockDataService], (service: StockDataService) => {
    expect(service).toBeTruthy();
  }));
});
