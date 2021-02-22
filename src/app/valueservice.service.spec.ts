import { TestBed } from '@angular/core/testing';

import { ValueserviceService } from './valueservice.service';

describe('ValueserviceService', () => {
  let service: ValueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
