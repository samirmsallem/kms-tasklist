import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import notEmpty = jasmine.notEmpty;
import {Aufgabe} from "../aufgabe";
import {AufgabeService} from "../aufgabe.service";
// todo Cannot find module @services/api.service
import { ApiService } from '@services/api.service';
import {Type} from "@angular/core";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // init start
  it('should have an empty aufgabeList', () => {
    expect(component.aufgabeList).not.toBeTruthy()
    expect(component.listOfPriorities).toBeTruthy()
  });

  // should add task to list
  it('should add Aufgabe', () => {

    component.newAufgabe(new Aufgabe("abc",false, new Date()))
    expect(component.aufgabeList?.includes( new Aufgabe("abc",false, new Date(1)))).toBeTruthy()
  });

  // if name of task not defined, task not in list
  it('should not get Aufgabe',  () => {
    component.newAufgabe(new Aufgabe("",false,new Date()))
    expect(component.aufgabeList).not.toBeTruthy()
  });

  // if no tasks nothing to delete
  it('should not get tasks',  () => {
    expect(component.aufgabeList).not.toBeTruthy()
    expect(component.deleteAufgabe(5)).not.toBeTruthy()

  });

  // todo delete tasks if they exists async?
  it('should delete Aufgabe',  () => {
    component.newAufgabe(new Aufgabe("abc",false, new Date(1)))
    expect(component.aufgabeList).toContain(new Aufgabe("abc",false, new Date(1)))
    component.deleteAufgabe(0)
    expect(component.aufgabeList).toHaveSize(0)

    component.newAufgabe(new Aufgabe("abc",false, new Date(1)))

  });

  // todo get list of tasks if they added async?
  it('should get AufgabeList',  () => {
    component.newAufgabe(new Aufgabe("abc",false, new Date()))
    component.newAufgabe(new Aufgabe("abcd",false, new Date()))

    expect(component.getAufgabeList()).toBeTruthy()

  });
});

describe('send res ', () => {
  let fixture: ComponentFixture<AufgabeService>;
  let app: AufgabeService;
  let httpMock: HttpTestingController;

  describe('send res', () => {
    beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        declarations: [
          AufgabeService,
        ],
        providers: [
          ApiService,
        ],
      });

      await TestBed.compileComponents();

      fixture = TestBed.createComponent(AufgabeService);
      app = fixture.componentInstance;
      httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

      fixture.detectChanges();
    });

    afterEach( () => {
      httpMock.verify();
    });

    it('test http call',  () => {

      const url = "http://localhost:8080/api/v1/aufgabe/"

      const dummyAufgabe = [
        {id: 0,
          title: 'abc',
          done: false,
          date: 1
        },
      ];

      const dummyAufgabe1 = [
        {id: 1,
          title: 'abc',
          done: false,
          date: 1
        },
      ];

      const dummyList = [
        {
          dummyAufgabe,
          dummyAufgabe1,
        },
      ];

      app.getAufgabeList()
      const req = httpMock.expectOne(`${url}`)
      req.flush(dummyAufgabe);

      expect(req.request.method).toBe('GET');
      expect(app.aufgabeList).toEqual(dummyList); // todo arg not assign

    });
  });
});
