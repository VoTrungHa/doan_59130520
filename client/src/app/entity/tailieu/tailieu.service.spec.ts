import { TestBed } from '@angular/core/testing';

import { TailieuService } from './tailieu.service';

describe('TailieuService', () => {
  let service: TailieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
