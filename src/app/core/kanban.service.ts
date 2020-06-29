import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kanban } from '../shared/models/kanban';

const url = 'http://localhost:8080/api/kanbans';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  kanban: Kanban;

  constructor(private http: HttpClient) { }

  one(): void {
    this.http.get<Kanban>(`${url}/8d1cb4b4e8d60ac4`).subscribe((kanban: Kanban) => {
      this.kanban = kanban;
    });
  }
}
