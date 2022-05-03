import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {path:"list",component:ListComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddTaskModalComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
