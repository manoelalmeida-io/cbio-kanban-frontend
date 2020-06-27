import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './home/components/kanban/kanban.component';
import { ColumnComponent } from './home/components/column/column.component';
import { ColumnTitleComponent } from './home/components/column-title/column-title.component';
import { ColumnHeaderComponent } from './home/components/column-header/column-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanComponent,
    ColumnComponent,
    ColumnTitleComponent,
    ColumnHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
