import { Component, OnInit } from '@angular/core';
import {DataService} from "src/app/data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Category} from "src/app/task";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {
  title: string;
  CategoryList = Category;
  Category: Category;


  constructor(public dataService: DataService, public activeModal: NgbActiveModal) {
    this.title = '';
    this.Category = Category.abc;
  }

  ngOnInit(): void {
  }

  setCategory(cat: any){
    this.Category = Object.keys(Category).indexOf(cat);
  }

  save() {
    if (this.title.trim().length > 0) {
      this.activeModal.close(this.title);
    }
  }
}
