import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddTaskModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

