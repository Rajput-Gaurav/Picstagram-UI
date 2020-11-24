import { TestBed, async, inject } from '@angular/core/testing';

import { PostFormGuard } from './post-form.guard';

describe('PostFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFormGuard]
    });
  });

  it('should ...', inject([PostFormGuard], (guard: PostFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
