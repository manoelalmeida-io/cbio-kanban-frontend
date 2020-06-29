import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() img: string;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.action.emit(event);
  }
}
