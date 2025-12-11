import { TestBed } from '@angular/core/testing';

import { CondidaService } from './condida.service';

describe('CondidaService', () => {
  let service: CondidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
