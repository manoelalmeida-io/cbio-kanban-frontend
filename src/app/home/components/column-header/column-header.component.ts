import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.css']
})
export class ColumnHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleBtnMoreClick(): void {
    alert('more');
  }

  handleBtnAddClick(): void {
    alert('add');
  }
}
