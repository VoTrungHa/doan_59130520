import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faBan,
  faSave,
  faFilePdf,
  faPager,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ShareService } from 'src/app/share/share.service';
import { DetailQuestionComponent } from '../../Question/detail-question/detail-question.component';
import { ModalQuestionComponent } from '../../Question/modal-question/modal-question.component';
import { QuesionService } from '../../Question/quesion.service';
import { Question } from '../../Question/question.model';
import {NotificationComponent}from '../../../share/notification/notification.component'
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-choose-question',
  templateUrl: './choose-question.component.html',
  styleUrls: ['./choose-question.component.scss'],
})
export class ChooseQuestionComponent implements OnInit {
  faSearch = faSearch;
  faPager = faPager;
  faFile = faFilePdf;
  faEdit = faTrash;
  faExpand = faCloudDownloadAlt;
  faFileImport = faCloudUploadAlt;
  faBan = faBan;
  faSave = faSave;
  @Output() data:EventEmitter<any>=new EventEmitter();
  themes: Array<any>;
  chooseQuestion: Array<any> = [];
  chooose: boolean = false;
  questions: Question[] = [];

  fromChoose: FormArray;
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
    private ss: ShareService,
    public activeModel: NgbActiveModal,
    private fb: FormBuilder
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
  chooseQues(data) {
    this.chooose = false; // set co
    if (this.chooseQuestion.length == 0) {
      this.chooseQuestion.push(data);
    } else {
      this.chooseQuestion.map((item, index) => {
        if (item._id === data._id) {// nếu đã tồn tại thì xóa đi, chuyeerm cờ thành true
          this.chooseQuestion.splice(index, 1);
          this.chooose = true;
          return;
        }
      });
      if (!this.chooose) {// nếu cờ vẫn không thay đổi thì thêm vào
        this.chooseQuestion.push(data);
      }
    }
  }
  hoantat() {
   let modal =this.ngModal.open(NotificationComponent,{centered:true})
    modal.componentInstance.title="Thêm câu hỏi vào đề thi";
    modal.componentInstance.text="Bạn có muốn thêm những câu hỏi đã chọn vào đề thi?.";
    modal.componentInstance.comfirm.subscribe(res=>{
      if(res)
      {
        this.data.emit(this.chooseQuestion);
        this.activeModel.dismiss('fsda');
      }
    })
  }
  close() {
    this.chooseQuestion=[];
    this.activeModel.dismiss("fdsa");
  }

  loadAll(page: number) {
    if (!page || page < 1) {
      page = 1;
    }
    this.params.current_page = page;
    this.questionService.getAll(this.params).subscribe(
      (res) => {
        this.questions = res.body.data;
        console.log(this.questions);
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
