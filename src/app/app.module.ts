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
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';
import { TaskCardComponent } from './home/components/task-card/task-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddColumnButtonComponent } from './home/components/add-column-button/add-column-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanComponent,
    ColumnComponent,
    ColumnTitleComponent,
    ColumnHeaderComponent,
    IconButtonComponent,
    TaskCardComponent,
    AddColumnButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
