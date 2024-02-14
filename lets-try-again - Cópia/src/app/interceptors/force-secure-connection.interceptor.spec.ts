import { TestBed } from '@angular/core/testing';

import { ForceSecureConnectionInterceptor } from './force-secure-connection.interceptor';

describe('ForceSecureConnectionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ForceSecureConnectionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ForceSecureConnectionInterceptor = TestBed.inject(ForceSecureConnectionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
