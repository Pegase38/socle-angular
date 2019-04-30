import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IsUserUnknownGuard } from './is-user-unknown.guard';

describe('IsUserUnknownGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [IsUserUnknownGuard]
    });
  });

  it('should ...', inject([IsUserUnknownGuard], (guard: IsUserUnknownGuard) => {
    expect(guard).toBeTruthy();
  }));
});
