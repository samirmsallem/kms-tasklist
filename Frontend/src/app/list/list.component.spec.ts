import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from "@angular/common/http/testing";
//import {isArrayLike} from "rxjs/dist/types/internal/util/isArrayLike";
import notEmpty = jasmine.notEmpty;
import {Aufgabe} from "../aufgabe";

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
