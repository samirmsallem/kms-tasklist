import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Priority} from "../priority";
import {Aufgabe} from "../aufgabe";
import {AufgabeService} from "../aufgabe.service";
import {Observable,of}  from 'rxjs';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  aufgabeList : Aufgabe[] = [];
  aufgabeEdit: Aufgabe = new Aufgabe();
  title: string = "";
  aufgabeasobservable:any;

  public listOfPriorities: Priority[] = [Priority.NORMAL, Priority.HIGH, Priority.LOW];

  constructor(public dataService: DataService,public aufgabeService:AufgabeService,private modalService: NgbModal,public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.aufgabeList = this.getAufgabeList();
    this.aufgabeasobservable = of(this.aufgabeList);
    this.aufgabeService.Refreshrequired.subscribe(res =>{
      this.getAufgabeList();
    })

  }

  closeResult: string | undefined;

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getAufgabeList(){
    this.aufgabeService.getAufgabeList().subscribe((res) =>{
      this.aufgabeList = res;
    })
    return this.aufgabeList;
  }

  editAufgabe(id:number,title: string){
    this.aufgabeEdit.title=title;
    this.aufgabeService.updateAufgabe(id,this.aufgabeEdit).subscribe((res) =>{
      console.log(res)
      this.getAufgabeList();
    })
  }

  deleteAufgabe(id:number){
    console.log(id);
    this.aufgabeService.deleteAufgabe(id).subscribe((res) =>{
      console.log(res)
      this.modalService.dismissAll();
      this.getAufgabeList();

    })
  }

  newAufgabe(aufgabe:Aufgabe){
    this.aufgabeService.createAufgabe(aufgabe).toPromise().then((res:any) => {
      console.log(res)
    })
  }

}
