import { TestBed } from '@angular/core/testing';

import { AufgabeService } from './aufgabe.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AufgabeService', () => {
  let service: AufgabeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientTestingModule],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AufgabeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
