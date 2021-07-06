import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faExpand,
  faFileImport,
  faSearch,
  faTrash,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NotificationComponent } from '../../share/notification/notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Baithi } from './baithi.model';
import { ShareService } from './../../share/share.service';
import { BaithiService } from './baithi.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DownloadQuestionComponent } from 'src/app/share/download-question/download-question.component';
@Component({
  selector: 'app-baithi',
  templateUrl: './baithi.component.html',
  styleUrls: ['./baithi.component.scss'],
})
export class BaithiComponent implements OnInit {
  faExpand = faExpand;
  faFileImport = faFileImport;
  faSearch = faSearch;
  faTrash = faTrash;
  faFileAlt = faFileAlt;
  faCloudDownloadAlt = faCloudDownloadAlt;

  Classes: Array<any> = [];
  kyThis: Array<any> = [];
  Baithis: Baithi[] = [];
  params: any = {
    current_page: 1,
    limit: 5,
    sort: 'createDate',
    reverse: false,
    search: '',
    kyThi: '',
    Class: '',
  };
  total_records;
  start = 0;
  end = 10;
  constructor(
    private loadUi: NgxUiLoaderService,
    private ss: ShareService,
    private baithiService: BaithiService,
    private modal: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAll(this.params.current_page);
    this.getClasss();
    this.getKyThi();
  }

  loadAll(page: number) {
    // console.log(page);
    if (page < 0 || !page) {
      page = 1;
    }
    this.params.current_page = page;
    this.baithiService.getByQuery(this.params).subscribe(
      (res) => {
        this.Baithis = res.body.data;
        this.baithiService.getAll().subscribe(
          (res) => {
            this.total_records = res.body.data.length;
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );

        this.findStart();
        this.findEnd();
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }
  getClasss()
  {
    this.ss.getAll().subscribe(
      (res) => {
        this.Classes = res.body.data;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }
  getKyThi() {
    this.ss.getAllKyThi().subscribe(
      (res) => {
        this.kyThis = res.body.data;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }
  findStart() {
    this.start = (this.params.current_page - 1) * this.params.limit;
  }
  // Limit total records
  // set value this.end
  findEnd() {
    // limit = pageSize
    const result = this.params.current_page * this.params.limit;
    result > this.total_records
      ? (this.end = this.total_records)
      : (this.end = result);
  }

  duyet(data, id) {
     let stor = JSON.parse(localStorage.getItem('listProfiles'));
    this.baithiService.getByIdForDuyet(id).subscribe(
      (res: any) => {
        // console.log(res.body.data);
        let proFile = JSON.parse(localStorage.getItem('listProfiles'));
        if (
          res.status == 200 &&
          res.body.data.detailTest.length > 0 &&
          res.body.data.status == 'true'
        ) {
          if (data == 'true') {

            if (
              stor &&
              (stor.authorities == 'TBM')
            ) {
              let name = stor.infor.firstName + ' ' + stor.infor.lastName;
              const da = {
                confirmationBy: name,
                createBy:
                  proFile.infor.firstName + ' ' + proFile.infor.lastName,
                idCreateBy: proFile._id,
                action: 'true',
              };

              this.baithiService.duyet(da, id).subscribe(
                (res) => {
                  if (res.status == 200) {
                    alert('Đề thi đã được phê duyệt');
                  }
                },
                (error: HttpErrorResponse) => {
                  alert(error.message);
                }
              );
            } else {
              alert(
                'Truy cập bị từ chối. Bạn có thể không có quyền thích hợp để truy cập chức năng ' +
                  '. Vui lòng liên hệ với quản trị viên để thêm quyền.'
              );
            }
          } else {
            if (stor && stor.authorities == 'TBM') {
              const da = {
                confirmationBy: '',
                createBy:
                  proFile.infor.firstName + ' ' + proFile.infor.lastName,
                idCreateBy: proFile._id,
                action: 'false',
              };
              this.baithiService.duyet(da, id).subscribe(
                (res) => {
                  if (res.status == 200) alert('Hủy phê duyệt thành công');
                },
                (error: HttpErrorResponse) => {
                  alert(error.message);
                }
              );
            } else {
              alert(
                'Đề thi không có bất kỳ câu hỏi nào hoặc đang trong giai đoạn lưu trữ. Hãy kiểm tra lại!'
              );
            }
        }
        } else {
          alert(
            'Đề thi không có bất kỳ câu hỏi nào hoặc đang trong giai đoạn lưu trữ. Hãy kiểm tra lại!'
          );
        }
        this.loadAll(this.params.current_page);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  search(e) {
    // console.log(e);
    this.params.current_page = 1;
    this.params.search = e;
    this.loadAll(this.params.current_page);
  }
  onChangelimit(e) {
    this.params.current_page = 1;
    this.params.limit = e;
    this.loadAll(this.params.current_page);
  }
  sortAll(value) {
    this.params.current_page = 1;
    this.params.sort = value;
    this.params.reverse = !this.params.reverse;
    this.loadAll(this.params.current_page);
  }
  deleteOn(value, made) {
    let profile = JSON.parse(localStorage.getItem('listProfiles'));

    let modal = this.modal.open(NotificationComponent, { centered: true });
    modal.componentInstance.title = `Xóa đề thi ${value}`;
    modal.componentInstance.text = `Bạn có muốn xóa đề thi này không ?`;
    modal.componentInstance.comfirm.subscribe((res) => {
      if (res) {
        const data = {
          idCreateBy: profile._id,
        };
        this.baithiService.delete(value, data).subscribe(
          (res) => {
            if (res.status == 200) alert(`xóa đề thi ${made} thành công`);
            this.loadUi.start();
            this.loadAll(this.params.current_page);
            this.loadUi.stop();
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
            alert(`error: ${error}`);
          }
        );
      }
    });
  }

  searchByKyThi(e) {
    // console.log(e);
    this.params.current_page = 1;
    this.params.kyThi = e;
    this.loadAll(this.params.current_page);
  }
  searchByClass(e) {
    this.params.current_page = 1;
    this.params.Class = e;
    this.loadAll(this.params.current_page);
  }

  getDataToServer(data) {
    // console.log(data);
    this.ss.dowDataToServer(data, 'dethi.xml').subscribe(
      (res) => {
        // console.log(res);
        if (res.status == 200) {
          const url = this.modal.open(DownloadQuestionComponent, {
            centered: true,
          });
          url.componentInstance.filename = 'dethi.xml';
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  UploadFile() {}
}
