import { Component, OnInit } from '@angular/core';
import {DataService} from "src/app/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
//import { title } from 'process';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title: string;

  constructor(public dataService: DataService, public activeModal: NgbActiveModal) {
    this.title= "";
   }

  ngOnInit(): void {
  }
  save() {
    if (this.title.trim().length > 0) {
      this.activeModal.close(this.title);
    }
  }

}
