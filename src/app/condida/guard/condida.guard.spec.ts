import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { condidaGuard } from './condida.guard';

describe('condidaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => condidaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
