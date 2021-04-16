import { TestBed } from '@angular/core/testing';

import { SimpleServiceService } from './simple-service.service';

describe('SimpleServiceService', () => {
  let service: SimpleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
