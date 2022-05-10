import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Priority} from "../priority";
import {Aufgabe} from "../aufgabe";
import {AufgabeService} from "../aufgabe.service";
import {Observable,of}  from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  aufgabeList : Aufgabe[] = [];
  aufgabeasobservable:any;

  public listOfPriorities: Priority[] = [Priority.NORMAL, Priority.HIGH, Priority.LOW];

  constructor(public dataService: DataService,public aufgabeService:AufgabeService) {
  }

  ngOnInit(): void {
    this.aufgabeList = this.getAufgabeList();
    this.aufgabeasobservable = of(this.aufgabeList);
    this.aufgabeService.Refreshrequired.subscribe(res =>{
      this.getAufgabeList();
    })

  }

  getAufgabeList(){
    this.aufgabeService.getAufgabeList().subscribe((res) =>{
      this.aufgabeList = res;
    })
    return this.aufgabeList;
  }

  editAufgabe(id:number,aufgabe: Aufgabe){
    this.aufgabeService.updateAufgabe(id,aufgabe).toPromise().then((res:any)=>{
      console.log(res)
    })
  }

  deleteAufgabe(id:number){
    console.log(id);
    this.aufgabeService.deleteAufgabe(id).subscribe((res) =>{
      console.log(res)
      this.getAufgabeList();
    })
  }

  newAufgabe(aufgabe:Aufgabe){
    this.aufgabeService.createAufgabe(aufgabe).toPromise().then((res:any) => {
      console.log(res)
    })
  }

}
