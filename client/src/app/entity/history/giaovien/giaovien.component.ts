import { Component, OnInit } from '@angular/core';

import { faExpand, faDownload } from '@fortawesome/free-solid-svg-icons';
import { HistoryService } from '../history.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.scss'],
})
export class GiaovienComponent implements OnInit {
  faExpand = faExpand;
  faDownload = faDownload;
  constructor() {}

  ngOnInit(): void {}

  clickDownload() {
    let name = 'giaovien.txt';
    FileSaver.saveAs(`http://localhost:3000/api/history/${name}`);
  }
}
