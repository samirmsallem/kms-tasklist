import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import {Aufgabe} from "./aufgabe";


@Injectable({
  providedIn: 'root'
})
export class AufgabeService {
  public aufgabeList = new BehaviorSubject<any>([]);
  private refreshrequire = new Subject<void>();
  private baseUrl = "http://localhost:8080/api/v1/aufgabe/";

  constructor( private http:HttpClient) {
  }
  ngOnInit(): void{

  }
  get Refreshrequired(){
   return this.refreshrequire;
  }
  getAufgabeList(): Observable<Aufgabe[]>{

    return this.http.get<Aufgabe[]>(`${this.baseUrl}`);

  }

  updateAufgabe(id: number,aufgabe: Aufgabe):Observable<Object>{

    return this.http.put(`${this.baseUrl}${id}`,aufgabe);
  }
  createAufgabe(aufgabe:Aufgabe):Observable<Object>{

    return this.http.post(`${this.baseUrl}`, aufgabe).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );

  }
  deleteAufgabe(id: number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}`+id )
  }

  getItem() {
    return this.aufgabeList.asObservable();
  }

}
