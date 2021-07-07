import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faFilePdf,
  faFileContract,
  faFileExcel,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  faFileContract = faFileContract;
  faFileExcel = faFileExcel;
  faFileCode = faFileCode;
  isTXT: boolean = true;
  isXML: boolean = false;
  isFile: boolean = false;
  @Output() comfirm: EventEmitter<any> = new EventEmitter();
  constructor(
    private ss: ShareService,
    private route: Router,
    private load: NgxUiLoaderService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}
  begin = '<Questions>';
  end = '</Questions>';
  Fquestion = '<Question>';
  Lquestion = '</Question>';
  Fanswers = '<answers>';
  Lanswers = '</answers>';
  Fanswer = '<answer>';
  Lanswer = '</answer>';
  Fname = '<name/>';
  Fbio = '<bio/>';
  Ftheme = '<theme/>';
  Flevel = '<level/>';

  public fileOver(event) {}

  public fileLeave(event) {}
  public dropped(files: NgxFileDropEntry[]) {
    const formData = new FormData();
    const droppedFile = files[0];
    // Is it a file?
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        // Here you can access the real file
        // console.log(droppedFile.relativePath, file);
        formData.append('file', file);
        //  console.log('fdsaaaaaaaa');
        let dotfile = files[0].relativePath.split('.')[1];
        if (dotfile === 'txt' && this.isTXT) {
          this.ss.upload(formData).subscribe(
            (res) => {
              //   console.log(res);
              // if (res.body.status && res.body.status == 405) {

              // }
              alert('Lưu ý những câu hỏi trùng lặp hệ thống sẽ tự xóa bỏ !');
              alert('Tải tệp lên thành công !.');
              this.comfirm.emit(true);
              this.activeModal.dismiss('fdsds');
            },
            (error: HttpErrorResponse) => {
              if (error.status == 406) {
                alert('Tệp của bạn có cấu trúc không hợp lệ !');
              }
            }
          );
        } else if (dotfile === 'xml' && this.isXML) {
          this.ss.uploadFileXml(formData).subscribe(
            (res) => {
              console.log(res);
              if (res.status == 200) {
                alert('Lưu ý những câu hỏi trùng lặp hệ thống sẽ tự xóa bỏ !');
                alert('Tải tệp lên thành công !.');
              }

              this.comfirm.emit(true);
              this.activeModal.dismiss('fdsds');
            },
            (err: HttpErrorResponse) => {
              alert('Tệp của bạn có cấu trúc không hợp lệ !');
            }
          );
        } else {
          this.isFile = true;
        }
      });
    } else {
      // It was a directory (empty directories are added, otherwise only files)
      const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      this.isFile = true;
    }
  }
  setFile(value) {
    if (value === 'txt') {
      this.isTXT = true;
      this.isXML = false;
      this.isFile = false;
    }
    if (value === 'xml') {
      this.isTXT = false;
      this.isXML = true;
      this.isFile = false;
    }
  }
}
