import { TestBed } from '@angular/core/testing';

import { AufgabeHttpService } from './aufgabe-http.service';

describe('AufgabeHttpService', () => {
  let service: AufgabeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AufgabeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
