import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { faEdit, faSearch, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
import { SinhvienService } from './sinhvien/sinhvien.service';
import {ShareService} from '../../share/share.service'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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
    authorities: 'true',
  };
  total_records;
  start = 0;
  end = 10;

  path:string;
  constructor(
    private route: Router,
    private ss: ShareService,
    private modal: NgbModal,
    private loadUi: NgxUiLoaderService,
    private sinhvienService: SinhvienService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAllGv(this.params.current_page);
    this.loadAllClass();
    this.path=this.router.snapshot.url[1].path;
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
  loadAllGv(page) {
    if (page < 0 || !page) {
      page = 1;
    }

    this.params.current_page = page;
    this.sinhvienService.loadAllGv(this.params).subscribe(
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
    this.loadAllGv(this.params.current_page);
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
        this.sinhvienService.delete(id,data).subscribe(
          (res) => {
            if (res.status == 200) {
              alert('Đã thực hiện xóa thành công !');
              this.loadUi.start();
              this.loadAllGv(this.params.current_page);
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
    this.route.navigate(['/thanhvien', item._id]);
  }
  sortAll(value) {
    this.params.sort = value;
    this.params.reverse = !this.params.reverse;
    this.params.current_page = 1;
    this.loadAllGv(this.params.current_page);
  }
  search(e) {
    this.params.search = e;
    this.params.current_page = 1;
    this.loadAllGv(this.params.current_page);
  }
  searchByClass(e) {
    this.params.Class = e;
    this.params.current_page = 1;
    this.loadAllGv(this.params.current_page);
  }
  searchByRole(e) {
    this.params.authorities = e;
    this.params.current_page = 1;
    this.loadAllGv(this.params.current_page);
  }
}
