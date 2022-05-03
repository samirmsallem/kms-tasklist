import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Priority} from "../priority";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listOfPriorities: Priority[] = [Priority.NORMAL, Priority.HIGH, Priority.LOW];
  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
