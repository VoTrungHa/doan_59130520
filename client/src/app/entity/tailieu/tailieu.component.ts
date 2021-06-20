import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SERVER_IMAGE } from 'src/app/app.contants';
import { ShareService } from 'src/app/share/share.service';
import { QuesionService } from '../Question/quesion.service';
import { Question } from '../Question/question.model';
import { TailieuService } from './tailieu.service';

@Component({
  selector: 'app-tailieu',
  templateUrl: './tailieu.component.html',
  styleUrls: ['./tailieu.component.scss'],
})
export class TailieuComponent implements OnInit {
  questions: Question[] = [];
  Dethi: Array<any> = [];
  DethiUse: Array<any> = [];
  themes: Array<any>;
  urlImage = SERVER_IMAGE;
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    search: '',
    theme: '',
    level: '',
  };
  total_records;
  start = 0;
  end = 10;

  startS = 0;
  endS = 10;

  constructor(
    private ss: ShareService,
    public questionService: QuesionService,
    private tailieuService: TailieuService
  ) {}

  ngOnInit(): void {
    this.loadAll(this.params.current_page);
    this.getDethibyClass();
    this.loadAllTrue(this.params.current_page);
    this.getTheme();
  }

  loadAll(page: number) {
    if (!page || page < 1) {
      page = 1;
    }
    this.params.current_page = page;
    this.questionService.getAll(this.params).subscribe(
      (res) => {
        this.questions = res.body.data;
        this.questionService.getOnAll().subscribe(
          (res) => {
            this.total_records = res.body.data.length;
          },
          (err) => console.log(err)
        );
        console.log(this.total_records);
        this.findStart();
        this.findEnd();
      },
      (error) => console.log(error)
    );
  }
  getTheme() {
    this.ss.getAllTheme().subscribe(
      (res) => {
        this.themes = res.body.data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
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
  searchByTheme(value) {
    this.params.theme = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }

  getDethibyClass() {
    let listProfiles = JSON.parse(localStorage.getItem('listProfiles'));
    if (listProfiles) {
      this.tailieuService.loadDethibyclass(listProfiles._id).subscribe(
        (res) => {
          this.DethiUse = res.body.data;
          console.log(this.DethiUse);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  onChangelimit(value) {
    this.params.limit = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }

  loadAllTrue(page) {
    // cuộc thi danh cho bạn
    if (page < 0 || !page) {
      page = 1;
    }
    this.tailieuService.loadAllDethi(this.params).subscribe(
      (res) => {
        console.log(res);
        this.Dethi = res.body.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
