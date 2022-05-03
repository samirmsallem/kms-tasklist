import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { TaskEntry } from "../task";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bearbeiten',
  templateUrl: './bearbeiten.component.html',
  styleUrls: ['./bearbeiten.component.css']
})
export class BearbeitenComponent implements OnInit {
 

  constructor(public activeModal: NgbActiveModal, public dataService: DataService, private router: Router, private route: ActivatedRoute ) { 
    

  }

  ngOnInit(): void {
  }

  save(): void {
    console.log("etwas")
    this.activeModal.close()
    
  }

}
