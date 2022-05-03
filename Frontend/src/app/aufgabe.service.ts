import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Aufgabe} from "./aufgabe";


@Injectable({
  providedIn: 'root'
})
export class AufgabeService {
  public aufgabeList = new BehaviorSubject<any>([]);
  private baseUrl = "http://localhost:8080/api/v1/aufgabe/";

  constructor( private http:HttpClient) {
  }

  getAufgabe() {
    return  this.http.get("http://localhost:8080/api/v1/aufgabe");
  }
  getAufgabeList(): Observable<Aufgabe[]>{

    return this.http.get<Aufgabe[]>(`${this.baseUrl}`);

  }

  updateAufgabe(id: number,aufgabe: Aufgabe):Observable<Object>{

    return this.http.put(`${this.baseUrl}${id}`,aufgabe);
  }
  createAufgabe(aufgabe:Aufgabe):Observable<Object>{

    return this.http.post(`${this.baseUrl}`, aufgabe);

  }
  deleteAufgabe(id: number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}`+id )
  }

  getItem() {
    return this.aufgabeList.asObservable();
  }



}
