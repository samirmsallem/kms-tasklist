import { Injectable } from '@angular/core';
import { TaskEntry } from "./task";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public taskList: TaskEntry[] = [];

  constructor() {

    //static values, will be put into db and then read through api - Samir M'Sallem
    this.taskList.push(new TaskEntry("Hausaufgaben"));
    this.taskList.push(new TaskEntry("KMS Sprint 2 planning"));
    this.taskList.push(new TaskEntry("Dienstag besprechen"));
  }

  add() {
    this.taskList.push(new TaskEntry("New task"));
  }

  done(task: TaskEntry){
    const index = this.taskList.findIndex(correctTask => correctTask === task);
    this.taskList[index].done = true;
  }

  undone(task: TaskEntry){
    const index = this.taskList.findIndex(correctTask => correctTask === task);
    this.taskList[index].done = false;
  }

}
