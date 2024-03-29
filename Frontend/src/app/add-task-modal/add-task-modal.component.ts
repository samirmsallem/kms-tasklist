import { Component } from '@angular/core';
import {DataService} from "src/app/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AufgabeService} from "../aufgabe.service";
import {Aufgabe} from "../aufgabe";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {

  title: string;
  aufgabe: Aufgabe = new Aufgabe();


  constructor(public dataService: DataService, public activeModal: NgbActiveModal,public aufgabeService:AufgabeService) {
    this.title = '';
  }

  save(title : string) {
    this.aufgabe = new Aufgabe();
    this.aufgabe.title = title;
    this.aufgabeService.createAufgabe(this.aufgabe).subscribe(result =>{
     console.log(result);
    })

    if (this.title.trim().length > 0) {
      this.activeModal.close(this.title);
    }
  }
}
