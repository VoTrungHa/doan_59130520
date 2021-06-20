import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SERVER_IMAGE } from 'src/app/app.contants';
import {HomeService}from './home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Dethi: Array<any> = [];
  DethiFalse: Array<any> = [];
  urlImage = SERVER_IMAGE;
  params: any = {
    current_page: 1,
    limit: 6,
  };

  total_recordsS;
  startS = 0;
  endS = 10;

  total_recordsF;
  startF = 0;
  endF = 10;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadAllTrue(this.params.current_page);
    this.loadAllfalse(this.params.current_page);
  }
  loadAllTrue(page) {
    if (page < 0 || !page) {
      page = 1;
    }

    this.params.current_page = page;
    this.homeService.loadAll(this.params).subscribe(
      (res) => {
        this.Dethi = res.body.data;
        this.total_recordsS = res.body.data.length;
        console.log(res.body.data);
        this.findStartS();
        this.findEndS();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  findStartS() {
    this.startS = (this.params.current_page - 1) * this.params.limit;
  }
  // Limit total records
  // set value this.end
  findEndS() {
    // limit = pageSize
    const result = this.params.current_page * this.params.limit;
    result > this.total_recordsS
      ? (this.endS = this.total_recordsS)
      : (this.endS = result);
  }
  findStartF() {
    this.startF = (this.params.current_page - 1) * this.params.limit;
  }
  // Limit total records
  // set value this.end
  findEndF() {
    // limit = pageSize
    const result = this.params.current_page * this.params.limit;
    result > this.total_recordsF
      ? (this.endF = this.total_recordsF)
      : (this.endF = result);
  }
  loadAllfalse(page) {
    if (page < 0 || !page) {
      page = 1;
    }

    this.params.current_page = page;
    this.homeService.loadAllfalse(this.params).subscribe(
      (res) => {
        this.DethiFalse = res.body.data;
        this.total_recordsF = res.body.data.length;
        console.log(res.body.data);
        this.findStartF();
        this.findEndF();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
