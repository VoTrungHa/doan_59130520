import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faExpand,
  faFilePdf,
  faPager,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DownloadQuestionComponent } from 'src/app/share/download-question/download-question.component';
import { DownloadbailamComponent } from 'src/app/share/downloadbailam/downloadbailam.component';
import { ShareService } from 'src/app/share/share.service';
import { ThiService } from '../thi/thi.service';
import { BangdiemService } from './bangdiem.service';

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
  faExpand = faExpand;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faFileImport = faCloudUploadAlt;

  authorities: any;
  Bailams: any = [];
  kythis: any = [];
  lops: any = [];
  createBys: any = [];
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    createBy: '',
    kyThi: '',
    search: '',
    Class: '',
    idPerformer: '',
  };
  total_records;
  start = 0;
  end = 10;
  constructor(
    private route: Router,
    private bangdiemSS: BangdiemService,
    private ss: ShareService,
    private ngModal: NgbModal,
    private thiservice: ThiService
  ) {
    this.loadKythi();
    this.loadAll(this.params.current_page);
  }

  ngOnInit(): void {
    this.getDateNeed();
  }

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
  getDateNeed() {
    this.ss.getAll().subscribe(
      (res) => {
        this.lops = res.body.data;
        // console.log(this.lops);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    this.ss.getAllAccountGv().subscribe(
      (res) => {
        this.createBys = res.body.data;
        // console.log(res.body.data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  loadAll(page) {
    // console.log(page);
    if (!page || page < 0) {
      page = 1;
    }
    this.params.current_page = page;
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    if (profile.authorities == 'GV') {
      this.params.createBy = profile._id;
      this.authorities = 'GV';
    }

    this.bangdiemSS.loadAll(this.params).subscribe(
      (res) => {
        this.Bailams = res.body.data;
        this.total_records = res.body.allData.length;
        // console.log(this.total_records);
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
  searchCreateBy(e) {
    this.params.createBy = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  searchLop(e) {
    this.params.Class = e;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  detailQuestion(item, performer) {
    this.route.navigate(['/nhacuatoi/thanhtich', performer], {
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
    // console.log(e);
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
          this.ngModal.open(DownloadbailamComponent, {
            centered: true,
          });
        }
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
  export() {
    let comfirm = this.ngModal.open(DownloadbailamComponent, {
      centered: true,
    });
    comfirm.componentInstance.filename = 'ketqua.xlsx';
    comfirm.componentInstance.data = this.Bailams;
  }
}
