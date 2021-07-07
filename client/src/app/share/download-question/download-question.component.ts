import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faFileCode,
  faFileAlt,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-download-question',
  templateUrl: './download-question.component.html',
  styleUrls: ['./download-question.component.scss'],
})
export class DownloadQuestionComponent implements OnInit {
  faFileCode = faFileCode;
  faFileAlt = faFileAlt;
  faDownload = faDownload;
  isXml: boolean = true;
  isPdf: boolean = false;
  @Input() filename: string;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  open(value) {
    if (value === 'xml') {
      this.isXml = true;
      this.isPdf = false;
    } else {
      this.isXml = false;
      this.isPdf = true;
    }
    // console.log(this.filename)
    let name = this.filename;
    window.open(`http://localhost:3000/api/viewXml/${name}`);
  }

  clickDownload() {
    let name = this.filename;
    if (this.isXml) {
      FileSaver.saveAs(`http://localhost:3000/api/viewXml/${name}`);
    }
  }
}
