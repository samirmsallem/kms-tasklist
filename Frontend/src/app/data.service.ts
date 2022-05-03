import { Injectable } from '@angular/core';
import { TaskEntry } from "./task";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddTaskModalComponent} from "src/app/add-task-modal/add-task-modal.component";

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
  const modal = this.modalService.open(AddTaskModalComponent);
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
    const index = this.taskList.findIndex(correctTask => correctTask === task);
    this.taskList[index].done = true;
  }

  undone(task: TaskEntry){
    const index = this.taskList.findIndex(correctTask => correctTask === task);
    this.taskList[index].done = false;
  }


}
