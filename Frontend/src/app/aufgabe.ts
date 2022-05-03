export class Aufgabe {
  id: number =0;
  title: string | undefined;
  done: boolean | undefined;
  date: Date | undefined;

  constructor(title:string,done:boolean,date:Date) {
    this.title =title;
    this.done=done;
    this.date=date;
  }
}
