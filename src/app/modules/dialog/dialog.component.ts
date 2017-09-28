import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() onChange = new EventEmitter<string>();
  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }
  ngOnInit() {
  }
  emitValue(value) {
    this.onChange.emit(value);
  }
}
