import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Priority} from "../priority";
import {Aufgabe} from "../aufgabe";
import {AufgabeService} from "../aufgabe.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  aufgabeList : Aufgabe[] | undefined;

  public listOfPriorities: Priority[] = [Priority.NORMAL, Priority.HIGH, Priority.LOW];

  constructor(public dataService: DataService,public aufgabeService:AufgabeService) {
  }

  ngOnInit(): void {
    this.getAufgabeList()
  }

  getAufgabeList(){
    this.aufgabeService.getAufgabeList().toPromise().then((res:any) =>{
      this.aufgabeList = res;
    })
  }

  editAufgabe(id:number,aufgabe: Aufgabe){
    this.aufgabeService.updateAufgabe(id,aufgabe).toPromise().then((res:any)=>{
      console.log(res)
    })
  }

  deleteAufgabe(id:number){
    this.aufgabeService.deleteAufgabe(id).toPromise().then((res:any) =>{
      console.log(res)
    })
  }

  newAufgabe(aufgabe:Aufgabe){
    this.aufgabeService.createAufgabe(aufgabe).toPromise().then((res:any) => {
      console.log(res)
    })
  }

}
