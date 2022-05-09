import { Component } from '@angular/core';
import {DataService} from "src/app/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {

  title: string;

  constructor(public dataService: DataService, public activeModal: NgbActiveModal) {
    this.title = '';
  }



  save() {
    if (this.title.trim().length > 0) {
      this.activeModal.close(this.title);
    }
  }
}
