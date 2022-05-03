import {Priority} from "./priority";

enum Category {
  abc, def, bb,
}

export class TaskEntry {
  title: string;
  done: boolean;
  category: Category;
  creationDate : Date;
  priority: Priority;

  constructor(title: string) {
    this.title = title;
    this.done = false;
    this.category = Category.abc;
    this.creationDate = new Date();
    this.priority = Priority.NORMAL;
  }
}
