import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal}from '@ng-bootstrap/ng-bootstrap'
import {
  faSearch,
  faPager,
  faTrash,
  faFilePdf,
  faCloudDownloadAlt,
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';
import { DownloadQuestionComponent } from 'src/app/share/download-question/download-question.component';
import { ShareService } from 'src/app/share/share.service';
import { ThiService } from '../thi.service';
@Component({
  selector: 'app-bangdiem',
  templateUrl: './bangdiem.component.html',
  styleUrls: ['./bangdiem.component.scss'],
})
export class BangdiemComponent implements OnInit {
  faSearch = faSearch;
  faPager = faPager;
  faFile = faFilePdf;
  faEdit = faTrash;
  faExpand = faCloudDownloadAlt;
  faFileImport = faCloudUploadAlt;

  Bailams: any = [];
  kythis: any = [];
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    idPerformer: '',// lấy theo người thực hiện
    kyThi: '',
    search: '',
    Class: '',
    createBy: '',// lấy thêo đề thi của người tạo
  };
  total_records;
  start = 0;
  end = 10;
  constructor(
    private route: Router,
    private thiservice: ThiService,
    private ss: ShareService,
    private ngModal: NgbModal
  ) {
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    this.params.idPerformer = profile._id;
    this.loadKythi();
    this.loadAll(this.params.current_page);
  }

  ngOnInit(): void {}

  loadKythi() {
    this.ss.getAllKyThi().subscribe(
      (res) => {
        this.kythis = res.body.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  loadAll(page) {
    if (!page || page < 0) {
      page = 1;
    }

    this.params.current_page = page;
    this.thiservice.loadAll(this.params).subscribe(
      (res) => {
        this.Bailams = res.body.data;
        this.total_records = res.body.allData.length;

        this.findStart();
        this.findEnd();
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

  search(e) {
    this.params.search = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  detailQuestion(item) {
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    this.route.navigate(['/nhacuatoi/thanhtich', profile._id], {
      queryParams: { dethi: item },
      // queryParamsHandling: 'merge',
    });
  }
  onChangelimit(e) {
    this.params.limit = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  searchkyThi(e) {
    console.log(e);
    this.params.kyThi = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  sortAll(name) {
    this.params.sort = name;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }

  getDataToServer(item) {
    this.thiservice.getDataToServer(item).subscribe(
      (res) => {
        if (res.status == 200) {
          const url = this.ngModal.open(DownloadQuestionComponent, {
            centered: true,
          });
          url.componentInstance.filename = 'bailam.xml';
        }
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}
