import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inputpassword',
  templateUrl: './inputpassword.component.html',
  styleUrls: ['./inputpassword.component.scss'],
})
export class InputpasswordComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Output() password: EventEmitter<any> = new EventEmitter();
  pass: string;
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}

  onYes(value) {
    this.password.emit(value);
  }

}
