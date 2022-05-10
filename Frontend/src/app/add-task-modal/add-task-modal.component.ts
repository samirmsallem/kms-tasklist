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
  aufgabe: any;
  aufgabe1:any;

  constructor(public dataService: DataService, public activeModal: NgbActiveModal,public aufgabeService:AufgabeService) {
    this.title = '';
  }

  ngOnInit(): void{
      this.aufgabeService.createAufgabe(this.aufgabe).toPromise().then(result =>{
        this.aufgabe = result;
      }).catch(error =>{

      }).finally(()=>{

      });
      this.save(this.title);
}



  save(title : string) {
    this.aufgabe = new Aufgabe(title ,false,new Date());
    this.aufgabe.title = title;
    this.aufgabeService.createAufgabe(this.aufgabe).subscribe(result =>{

    })

    if (this.title.trim().length > 0) {
      this.activeModal.close(this.title);
    }
  }
}
