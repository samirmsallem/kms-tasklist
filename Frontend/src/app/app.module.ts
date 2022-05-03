import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from "@angular/router";
import { BearbeitenComponent } from './bearbeiten/bearbeiten.component';

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
    BearbeitenComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
