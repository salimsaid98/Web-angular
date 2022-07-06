import { TestBed } from '@angular/core/testing';

import { AuthntcationService } from './authntcation.service';

describe('AuthntcationService', () => {
  let service: AuthntcationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthntcationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
