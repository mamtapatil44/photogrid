import { TestBed } from '@angular/core/testing';

import { PhotoComparisonService } from './photo-comparison.service';

describe('PhotoComparisonService', () => {
  let service: PhotoComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
