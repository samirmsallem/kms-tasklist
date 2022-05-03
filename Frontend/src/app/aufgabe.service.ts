import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Aufgabe} from "./aufgabe";


@Injectable({
  providedIn: 'root'
})
export class AufgabeService {
  public aufgabeList: Aufgabe[] | undefined; //List von A

  constructor( private http: HttpClient) {
  }

  getAllAufgabe() {
    return  this.http.get('http://localhost:8080/api/v1/aufgabe');
  }

}
