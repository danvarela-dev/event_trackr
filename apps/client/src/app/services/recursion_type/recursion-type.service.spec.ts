import { TestBed } from '@angular/core/testing';

import { RecursionTypeService } from './recursion-type.service';

describe('RecursionTypeService', () => {
  let service: RecursionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
