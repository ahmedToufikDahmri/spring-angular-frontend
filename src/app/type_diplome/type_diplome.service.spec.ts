import { TestBed } from '@angular/core/testing';

import { Type_diplomeService } from './type_diplome.service';

describe('Type_diplomeService', () => {
  let service: Type_diplomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Type_diplomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
