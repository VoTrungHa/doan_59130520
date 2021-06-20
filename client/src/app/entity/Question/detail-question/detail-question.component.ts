import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faBan, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
import { QuesionService } from '../quesion.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss'],
})
export class DetailQuestionComponent implements OnInit {
  faSave = faSave;
  faCandyCane = faBan;
  questionForm: FormGroup;
  index: number = 0;
  faTrash = faTrash;
  isvalidator: boolean = false;
  message: string = '';
  id: string = '';
  checkbio: boolean = false;
  questionCheckbio: Array<any> = [];
  flas: any;

  @Input() data: Question;
  @Output() comfirm: EventEmitter<any> = new EventEmitter();
  isChange: boolean = false;
  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private questionService: QuesionService,
    private ngModel: NgbModal,
    private loadService: NgxUiLoaderService
  ) {
    this.questionForm = this.fb.group({
      question: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      level: new FormControl('1', [Validators.required]),
      answers: this.fb.array([
        // create formArray container one formGroup
        // this.fb.group({
        //   answer: new FormControl('', [Validators.required]),
        //   bio: new FormControl(false),
        // }),
      ]),
    });
  }

  ngOnInit(): void {
    this.getDateToForm(this.data);
  }
  setIsChangeEdit() {
    this.isChange = true;
    console.log(this.isChange);
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

  getDateToForm(data) {
    this.id = data._id;
    const control = <FormArray>this.questionForm.controls['answers'];
    this.questionForm.get('question').setValue(data.question);
    this.questionForm.get('theme').setValue(data.theme);
    this.questionForm.get('level').setValue(data.level);
    this.questionForm.get('question').setValue(data.question);
    data.answers.map((item) => {
      let data = this.fb.group({
        answer: [item.answer, Validators.required],
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
      bio: new FormControl(''),
    });
    control.push(fg);
    // let cr = this.fb.group({ cname: new FormControl('') });
    // correct.push(cr);
  }
  clickAddOrDelete(
    choose: boolean,inde:any // create item answer
  ) {
    console.log(inde)
    const control = <FormArray>this.questionForm.controls['answers'];
      console.log(control.value);
    // const correct = <FormArray>this.questionForm.controls['correct'];
    if (choose && this.isChange) {
      this.index += 1;
      // control.push(this.formBuilder.control([`answer${this.index}`]));
      this.addanswer(``);
    } else if (control.length > 0 && this.isChange ) {
      control.removeAt(inde);
      console.log(control.value);
      this.index -= 1;
      // correct.removeAt(this.index);
    }
  }
  setValidator() {
    this.isvalidator = true;
  }
  update() {
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
      let modal = this.ngModel.open(NotificationComponent, {
        size: 'md',
        centered: true,
      });
      modal.componentInstance.title = `Thay đổi câu hỏi ${this.id.substring(
        0,
        8
      )}`;
      modal.componentInstance.text = `Bạn đang muốn thay đổi nội dung câu hỏi này ?`;
      modal.componentInstance.comfirm.subscribe((res) => {
        if (res) {
          let profile = JSON.parse(localStorage.getItem('listProfiles'));
          this.questionForm.value.createBy =
            profile.infor.firstName + ' ' + profile.infor.lastName;
          this.questionForm.value.idCreateBy = profile._id;
          this.questionService
            .update(this.questionForm.value, this.id)
            .subscribe((res) => {
              if (res.status == 200) {
                alert('Thay đổi question thành công !');
                this.loadService.start();
              }
              this.comfirm.next(true);
              this.modal.dismiss();
              this.loadService.stop();
            });
        }
      });
    }
  }

  notification() {
    this.modal.close('close modal');
  }
}
