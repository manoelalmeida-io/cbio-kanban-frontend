import { Component, OnInit } from '@angular/core';
import { KanbanService } from 'src/app/core/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor(public service: KanbanService) { }

  ngOnInit(): void {
    this.service.one();
  }

}
