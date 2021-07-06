import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from '../../../../share/notification/notification.component';
import {
  faSearch,
  faUser,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { SinhvienService } from '../sinhvien.service';
import { ShareService } from 'src/app/share/share.service';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.scss'],
})
export class SinhvienComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faTrash = faTrash;
  faEdit = faEdit;

  sinhViens: Array<any> = [];
  lops: Array<any> = [];
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    search: '',
    Class: '',
  };
  total_records;
  start = 0;
  end = 10;
  constructor(
    private route: Router,
    private modal: NgbModal,
    private ss: ShareService,
    private loadUi: NgxUiLoaderService,
    private sinhvienService: SinhvienService
  ) {}

  ngOnInit(): void {
    this.loadAll(this.params.current_page);
    this.loadAllClass();
  }
  loadAll(page) {
    if (page < 0 || !page) {
      page = 1;
    }
    this.params.current_page = page;
    this.sinhvienService.loadAll(this.params).subscribe(
      (res) => {
        this.sinhViens = res.body.data;
        // console.log(this.sinhViens);
        this.sinhvienService.getAll().subscribe(
          (res) => {
            this.total_records = res.body.data.length;
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }

  onChangelimit(e) {
    // console.log(e);
    this.params.limit = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  deleteOn(id, mssv) {
    let modal = this.modal.open(NotificationComponent, {
      centered: true,
      size: 'md',
    });
    modal.componentInstance.title = `Xóa sinh viên có mã số ${mssv} `;
    modal.componentInstance.text = `Bạn có muốn xóa sinh viên này không ?`;
    modal.componentInstance.comfirm.subscribe((res) => {
      if (res) {
        const proflile = JSON.parse(localStorage.getItem('listProfiles'));

        const data = {
          createBy: `${proflile.infor.firstName} ${proflile.infor.lastName}`,
          idCreateBy: proflile._id,
        };
        this.sinhvienService.delete(id, data).subscribe(
          (res) => {
            if (res.status == 200) {
              alert('Đã thực hiện xóa thành công !');
              this.loadUi.start();
              this.loadAll(this.params.current_page);
              this.loadUi.stop();
            }
          },
          (error: HttpErrorResponse) => {
            // console.log(error);
          }
        );
      }
    });
  }
  detail(item) {
    // console.log(item);
    this.route.navigate(['/thanhvien/', item._id]);
  }
  sortAll(value) {
    this.params.sort = value;
    this.params.reverse = !this.params.reverse;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  search(e) {
    this.params.search = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  searchByClass(e) {
    this.params.Class = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  loadAllClass() {
    this.ss.getAll().subscribe(
      (res) => {
        // console.log(res);
        this.lops = res.body.data;
      },
      (error: HttpErrorResponse) => {
        // console.log(error);
      }
    );
  }
}
