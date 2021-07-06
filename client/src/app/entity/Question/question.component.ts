import {
  AfterContentChecked,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import {
  faSearch,
  faPager,
  faTrash,
  faFilePdf,
  faCloudDownloadAlt,
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';
import {DownloadQuestionComponent}from '../../share/download-question/download-question.component';
import * as FileSaver from 'file-saver';
import {UploadFileComponent}from '../../share/upload-file/upload-file.component';
import {ShareService}from '../../share/share.service';
import {
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalQuestionComponent } from '../../entity/Question/modal-question/modal-question.component';
import { QuesionService } from './quesion.service';
import { Question } from './question.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from '../../share/notification/notification.component';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  faSearch = faSearch;
  faPager = faPager;
  faFile = faFilePdf;
  faEdit = faTrash;
  faExpand = faCloudDownloadAlt;
  faFileImport = faCloudUploadAlt;

  themes: Array<any>;

  questions: Question[] = [];
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
  constructor(
    private ngModal: NgbModal,
    private questionService: QuesionService,
    private loadService: NgxUiLoaderService,
    private ss: ShareService
  ) {}

  ngOnInit(): void {
    this.loadAll(this.params.current_page);
    this.getTheme();
  }

  open() {
    let modal = this.ngModal.open(ModalQuestionComponent, {
      size: 'md',
      backdrop: 'static',
    });
    modal.componentInstance.comfirm.subscribe((res) => {
      if (res) {
        this.loadAll(this.params.current_page);
      }
    });
  }
  UploadFile() {
    let modal = this.ngModal.open(UploadFileComponent, {
      centered: true,
      size: 'md',
    });
    modal.componentInstance.comfirm.subscribe((res) => {
      if (res) this.loadAll(this.params.current_page);
    });
  }
  deleteOn(id) {
    let comfirm = this.ngModal.open(NotificationComponent, {
      centered: true,
      size: 'md',
    });
    comfirm.componentInstance.title = `Xóa câu hỏi ${id.substring(0, 10)}`;
    comfirm.componentInstance.text = 'Bạn muốn xóa câu hỏi này ?';
    comfirm.componentInstance.comfirm.subscribe((res) => {
      if (res) {
        this.loadService.start();
        let profile = JSON.parse(localStorage.getItem('listProfiles'));

        const data = {
          idCreateBy: profile._id,
          createBy: profile.infor.firstName + ' ' + profile.infor.lastName,
        };
        this.questionService.delete(id, data).subscribe((res) => {
          this.loadAll(this.params.current_page);
          this.loadService.stop();
        });
      }
    });
  }

  loadAll(page: number) {
    console.log(page);
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

        this.findStart();
        this.findEnd();
      },
      (error) => console.log(error)
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
  detailQuestion(object) {
    console.log(object);
    let modal = this.ngModal.open(DetailQuestionComponent, {
      size: 'md',
      centered: true,
    });
    modal.componentInstance.data = object;
    modal.componentInstance.comfirm.subscribe((res) => {
      if (res) {
        this.loadAll(this.params.current_page);
      }
    });
  }
  DownloadFile() {
    var blob = new Blob(['Hello, world!'], {
      type: 'text/plain;charset=utf-8',
    });
    FileSaver.saveAs(blob, 'helloworld.txt');
  }

  getDataToServer() {
    this.ss.getDataToServer(this.questions).subscribe(
      (res) => {
        console.log(res);
        if (res.status == 200) {
          const url = this.ngModal.open(DownloadQuestionComponent, {
            centered: true,
          });
          url.componentInstance.filename = 'question.xml';
        }
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }

  search(value) {
    this.params.search = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  searchByLevel(value) {
    this.params.level = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  onChangelimit(value) {
    this.params.limit = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  searchByTheme(value) {
    this.params.theme = value;
    this.params.current_page = 1;
    this.loadAll(this.params.current_page);
  }
  sortAll(value) {
    this.params.current_page = 1;
    this.params.sort = value;
    this.params.reverse = !this.params.reverse;
    this.loadAll(this.params.current_page);
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
}
