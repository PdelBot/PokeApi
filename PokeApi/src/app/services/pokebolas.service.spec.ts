import { TestBed } from '@angular/core/testing';

import { PokebolasService } from './pokebolas-service.service';

describe('PokebolasService', () => {
  let service: PokebolasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokebolasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
