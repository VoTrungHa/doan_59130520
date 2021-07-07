import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyhomeService } from './myhome.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss'],
})
export class MyhomeComponent implements OnInit {
  Dethi: Array<any> = [];
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    search: '',
    state: 'true',
    id: '',
    Class: [],
    authorities: 'SV',
    createBy: '',
  };
  total_records;
  start = 0;
  end = 10;
  constructor(private myhomeService: MyhomeService) {}

  ngOnInit(): void {
    this.getAll();
    this.loadAll(this.params.current_page);
  }

  changeTime(value) {
    // console.log(value);
    this.params.state = value;
    this.params.current_page;
    this.loadAll(this.params.current_page);
  }

  getAll() {
    // dùng để phân trang
    const stor = JSON.parse(localStorage.getItem('listProfiles'));
    this.myhomeService.getAll(stor._id, this.params.state).subscribe((res) => {
      if (res.status == 200) {
        this.total_records = res.body.data.length;
        // console.log(this.total_records);
      }
    });
  }

  loadAll(page) {
    if (page < 0 || !page) {
      page = 1;
    }
    const stor = JSON.parse(localStorage.getItem('listProfiles'));
    if (stor) {
      this.params.authorities = stor.authorities;
      if (stor.authorities == 'SV') {
        // nếu sv thì lấy đề thi theo clss
        stor.infor.Class.map((item, index) => {
          this.params.Class.push(item.name);
        });
      }
      if (stor.authorities == 'GV') {
        // nếu Gv lầy theo đề thi của người tạo
        this.params.createBy = stor._id;
      }
    }
    // check role
    // class
    this.params.current_page = page;
    this.myhomeService.loadAll(this.params).subscribe(
      (res) => {
        // console.log(res);
        this.Dethi = res.body.data;
        // console.log(res.body.data);
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
}
