import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/shared/models/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  constructor() { }

  ngOnInit(): void {
  }

}
