import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {NgbActiveModal}from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Output() comfirm:EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  onYes() {
    this.comfirm.emit(true)
  }
}
