import { TestBed } from '@angular/core/testing';

import { YearServicesService } from './year-services.service';

describe('YearServicesService', () => {
  let service: YearServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
