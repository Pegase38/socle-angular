import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IsUserSignedInGuardGuard } from './is-user-signed-in-guard.guard';

describe('IsUserSignedInGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [IsUserSignedInGuardGuard]
    });
  });

  it('should ...', inject([IsUserSignedInGuardGuard], (guard: IsUserSignedInGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
