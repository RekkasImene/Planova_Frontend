import { TestBed } from '@angular/core/testing';

import { LocalAuthentication } from './local-authentication';

describe('LocalAuthentication', () => {
  let service: LocalAuthentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAuthentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
