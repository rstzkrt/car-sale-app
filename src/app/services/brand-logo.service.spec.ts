import { TestBed } from '@angular/core/testing';

import { BrandLogoService } from './brand-logo.service';

describe('BrandLogoService', () => {
  let service: BrandLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
