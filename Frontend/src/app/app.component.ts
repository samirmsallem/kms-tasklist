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


  constructor() { }

  ngOnInit(): void {
  }

}
