import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { faDownload, faFileAlt, faFileCode,faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as FileSaver from 'file-saver';
import { BangdiemService } from 'src/app/entity/bangdiem/bangdiem.service';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-downloadbailam',
  templateUrl: './downloadbailam.component.html',
  styleUrls: ['./downloadbailam.component.scss'],
})
export class DownloadbailamComponent implements OnInit {
  faFileCode = faFileCode;
  faFileAlt = faFileAlt;
  faDownload = faDownload;
  faFileExcel = faFileExcel;
  isXml: boolean = true;
  isExcel: boolean = false;
  @Input() data: string;
  constructor(
    public activeModal: NgbActiveModal,
    private bangdiemSS: BangdiemService,
    private ss:ShareService

  ) {}

  ngOnInit(): void {}

  open(value) {
    if (value === 'xml') {
      this.isXml = true;
      this.isExcel = false;
      this.bangdiemSS.exportFileXml(this.data).subscribe(
        (res) => {
          if (res.status == 200) {
            window.open(`http://localhost:3000/api/viewXml/ketqua.xml`);
          }
        },
        (error: HttpErrorResponse) => {
          alert(error);
        }
      );
    } else {
      this.isXml = false;
      this.isExcel = true;
      this.bangdiemSS.exportFileExcel(this.data).subscribe(
        (res) => {
          if(res.status==200)
          {

             window.open(`http://localhost:3000/api/excel/ketqua.xlsx`);
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }


  }

  clickDownload() {

    if (this.isExcel) {
      FileSaver.saveAs(`http://localhost:3000/api/excel/ketqua.xlsx`);
    }
     if (this.isXml) {
       FileSaver.saveAs(`http://localhost:3000/api/viewXml/ketqua.xml`);
     }
  }
}
