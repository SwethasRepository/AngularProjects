import { TestBed } from '@angular/core/testing';

import { MyCalculator.Service.TsService } from './my-calculator.service.ts.service';

describe('MyCalculator.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCalculator.Service.TsService = TestBed.get(MyCalculator.Service.TsService);
    expect(service).toBeTruthy();
  });
});
