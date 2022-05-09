import { Injectable } from '@angular/core';
import { TaskEntry } from "./task";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddTaskModalComponent} from "src/app/add-task-modal/add-task-modal.component";
import {Priority} from "./priority";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public taskList: TaskEntry[] = [];

  constructor(public modalService: NgbModal) {

    //static values, will be put into db and then read through api - Samir M'Sallem
    this.taskList.push(new TaskEntry("Hausaufgaben"));
    this.taskList.push(new TaskEntry("KMS Sprint 2 planning"));
    this.taskList.push(new TaskEntry("Dienstag besprechen"));
  }

  async openAddModal(){
  const modal = this.modalService.open(AddTaskModalComponent, { size: 'lg' });
    try {
      const result: string = await modal.result;
      await this.add(result);
    } catch (e) {
      console.log('Windows closed: ' + e);
    }
  }

  add(title: string) {
    this.taskList.push(new TaskEntry(title));
  }

  done(task: TaskEntry){
    this.taskList[this.getIndex(task)].done = true;
  }

  undone(task: TaskEntry){
    this.taskList[this.getIndex(task)].done = false;
  }

  setPriority(task: TaskEntry, priority: Priority){
    this.taskList[this.getIndex(task)].priority = priority;
  }

  getIndex(task: TaskEntry){
    return this.taskList.findIndex(correctTask => correctTask === task);
  }


}
