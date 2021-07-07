import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrash, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { QuesionService } from '../quesion.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from '../../../share/notification/notification.component';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Question } from '../question.model';
import { ShareService } from 'src/app/share/share.service';
import { isThisSecond } from 'date-fns';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.scss'],
})
export class ModalQuestionComponent implements OnInit {
  faSave = faSave;
  faCandyCane = faBan;
  questionForm: FormGroup;
  index: number = 0;
  faTrash = faTrash;
  isvalidator: boolean = false;
  message: string = '';
  id: string = '';
  themes: any = [];

  // ccheck anser did choose trueanswers yet;
  checkbio: boolean = false;
  questionCheckbio: Array<any> = [];
  flas: any;

  @Input() data: Question;
  @Output() comfirm: EventEmitter<any> = new EventEmitter();
  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private questionService: QuesionService,
    private ngModel: NgbModal,
    private loadService: NgxUiLoaderService,
    private ss: ShareService
  ) {
    this.questionForm = this.fb.group({
      question: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      answers: this.fb.array([
        // create formArray container one formGroup
        this.fb.group({
          answer: new FormControl('', [Validators.required]),
          bio: new FormControl(false),
        }),
      ]),
      // correct: this.fb.array([
      //   // create formArray container one formGroup
      //   this.fb.group({
      //     cname: new FormControl(''),
      //   }),
      // ]),
    });
  }

  ngOnInit(): void {
    this.getTheme();
    if (this.data) {
      this.getDateToForm(this.data);
    }
  }
  get question() {
    return this.questionForm.get('question');
  }
  get theme() {
    return this.questionForm.get('theme');
  }
  get level() {
    return this.questionForm.get('level');
  }
  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray; // get list answer
  }
  getTheme() {
    this.ss.getAllTheme().subscribe(
      (res) => {
        this.themes = res.body.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getDateToForm(data) {
    this.id = data._id.substring(0, 12);
    const control = <FormArray>this.questionForm.controls['answers'];
    // this.questionForm.get('question').setValue(data.question);
    this.questionForm.get('theme').setValue(data.theme);
    this.questionForm.get('level').setValue(data.level);
    this.questionForm.get('question').setValue(data.question);
    data.answers.map((item) => {
      let data = this.fb.group({
        answer: item.answer,
        bio: item.bio ? item.bio : false,
      });
      control.push(data);
    });
  }

  addanswer(as: string) {
    // add formgroup to formdata
    const control = <FormArray>this.questionForm.controls['answers'];
    // const correct = <FormArray>this.questionForm.controls['correct'];
    let fg = this.fb.group({
      answer: new FormControl('', Validators.required),
      bio: new FormControl(false),
    });
    control.push(fg);
    // let cr = this.fb.group({ cname: new FormControl('') });
    // correct.push(cr);
  }
  clickAddOrDelete(
    choose: boolean,
    inde: any // create item answer
  ) {
    console.log(inde);
    const control = <FormArray>this.questionForm.controls['answers'];

    // const correct = <FormArray>this.questionForm.controls['correct'];
    if (choose) {
      this.index += 1;
      // control.push(this.formBuilder.control([`answer${this.index}`]));
      this.addanswer(``);
    } else if (this.index > 0) {
      control.removeAt(inde);
      this.index -= 1;
      // correct.removeAt(this.index);
    }
  }

  setValidator() {
    this.isvalidator = true;
  }
  createQuestion() {
    this.checkbio = false;
    this.flas = 0;
    this.questionForm.value.answers.map((it, ind) => {
      if (it.bio == true) {
        this.flas = 1;
      }
    });
    if (this.flas == 0) {
      this.checkbio = true;
    } else {
      let profile = JSON.parse(localStorage.getItem('listProfiles'));
      this.questionForm.value.createBy =
        profile.infor.firstName + ' ' + profile.infor.lastName;
      this.questionForm.value.idCreateBy = profile._id;
      // console.log(this.questionForm.value);
      this.questionService.create(this.questionForm.value).subscribe(
        (res) => {
          if (res.status == 200) {
            this.modal.dismiss('create success');
            alert('Tạo câu hỏi thành công');
            this.comfirm.next(true);
            this.loadService.start();
          } else {
            alert('Đã tồn tại !');
          }
          this.loadService.stop();
        },
        (error: HttpErrorResponse) => alert('Đã tồn tại !')
      );
    }
  }
  clickCancel() {
    let comfirm = this.ngModel.open(NotificationComponent, {
      size: 'md',
      centered: true,
    });
    comfirm.componentInstance.title = 'Tạo câu hỏi';
    comfirm.componentInstance.text = 'Bạn muốn hủy bỏ câu hỏi này?';
  }

  notification() {
    this.modal.close('close modal');
  }
}
