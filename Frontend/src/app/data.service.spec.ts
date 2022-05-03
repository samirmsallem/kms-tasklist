import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {Priority} from "./priority";

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default task', () => {
    expect(service.taskList[0].title).toEqual("Hausaufgaben")
  });


  it('should create task', () => {
    service.add("Test");
    expect(service.taskList[3].title).toEqual("Test")
  });

  it('should change priority', () => {
    service.add("Test");
    service.setPriority(service.taskList[0], Priority.LOW);
    expect(service.taskList[0].priority).toEqual(Priority.LOW);
  });
});
