import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faExpand,faDownload } from '@fortawesome/free-solid-svg-icons';
import { HistoryService } from '../history.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.scss'],
})
export class SinhvienComponent implements OnInit {
  faExpand = faExpand;
  faDownload = faDownload;
  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {}

  clickDownload() {
    let name = 'sinhvien.txt';
    FileSaver.saveAs(`http://localhost:3000/api/history/${name}`);
  }
}
