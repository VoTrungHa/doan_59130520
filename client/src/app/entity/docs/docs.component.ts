import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  Chuong: Array<any> = [];
  faTrash = faTrash;
  faEdit = faEdit;
  params: any = {
    current_page: 1,
    limit: 6,
    search: '',
  };
  authorities: any;
  total_records;
  start = 0;
  end = 10;
  constructor(
    private docService: DocsService,
    private loadService: NgxUiLoaderService,
    private ngModel: NgbModal
  ) {
    let proFile = JSON.parse(localStorage.getItem('listProfiles'));
    this.authorities = proFile.authorities;
    this.getAll();
    this.loadAll(this.params.current_page);
  }

  ngOnInit(): void {}

  getAll() {
    this.docService.loadAll().subscribe(
      (res) => {
        if (res) {
          this.total_records = res.body.data.length;
          // console.log(res);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadAll(page) {
    if (page < 0 || !page) {
      page = 1;
    }
    // check role
    // class
    this.params.current_page = page;
    this.docService.getAll(this.params).subscribe(
      (res) => {
        // console.log(res);
        this.Chuong = res.body.data;
        this.findEnd();
        this.findStart();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
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
  changeSearch(e) {
    this.params.page_current = 1;
    this.params.search = e;
    this.loadAll(this.params.page_curent);
  }
  delete(id, name) {
    let modal = this.ngModel.open(NotificationComponent, {
      size: 'md',
      centered: true,
    });
    modal.componentInstance.title = `Xóa nội dung ${name.substring(0, 8)}`;
    modal.componentInstance.text = `Bạn đang muốn xóa nội dung của ${name.substring(
      0,
      8
    )} ?`;
    modal.componentInstance.comfirm.subscribe((resp) => {
      if (resp) {
        this.docService.delete(id).subscribe(
          (res) => {
            // console.log(res);
            if (res.status == 200) {
              alert(`Xóa nội dung chương ${name.substring(0, 8)} thành công`);
              this.loadService.start();
              this.loadAll(1);
            }
            this.loadService.stop();
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    });
  }
}
