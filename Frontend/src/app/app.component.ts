import { Component } from '@angular/core';
import {AufgabeService} from "./aufgabe.service";
import {Aufgabe} from "./aufgabe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aufgabenliste';

  test : AufgabeService | undefined;
  testcreate: Aufgabe = new Aufgabe("ggsggs",false,new Date());

  constructor(private aufgabeservice:AufgabeService) { }

  ngOnInit(): void {

    console.log("hallo")
    console.log(this.aufgabeservice.getAufgabeList().toPromise().then((res: any) =>{
        console.log(res);
      })
    )


      console.log((this.aufgabeservice.deleteAufgabe(5).toPromise().then((res: any) =>{
        console.log(res);
      })))

   console.log((this.aufgabeservice.createAufgabe(this.testcreate).toPromise().then((res: any) =>{
      console.log(res);
    })))

    console.log((this.aufgabeservice.updateAufgabe(7,this.testcreate).toPromise().then((res: any) =>{
      console.log(res)
    })))

  }

}
