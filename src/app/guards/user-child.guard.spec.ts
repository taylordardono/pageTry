import { TestBed } from '@angular/core/testing';

import { UserChildGuard } from './user-child.guard';

describe('UserChildGuard', () => {
  let guard: UserChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
