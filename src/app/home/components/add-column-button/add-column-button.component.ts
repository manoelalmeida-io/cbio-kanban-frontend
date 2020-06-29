import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-column-button',
  templateUrl: './add-column-button.component.html',
  styleUrls: ['./add-column-button.component.css']
})
export class AddColumnButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    alert('add column');
  }
}
