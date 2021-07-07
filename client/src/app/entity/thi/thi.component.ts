import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { ThiService } from './thi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormArray,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.scss'],
})
export class ThiComponent implements OnInit {
  Dethi: any;
  Data: any;
  namHoc: any;
  kThi: any;
  formDethi: FormGroup;
  truethu: boolean = true;
  activeSection: any;
  ischeckChooseAnser: boolean = false; // kiểm tran câu trả lời trống.
  anserUserEmpety: Array<any> = [];

  co: any = 1;
  time: any;
  ngay: any;
  gio: any;
  phut: any;
  giay: any;
  params: any = {
    current_page: 1,
    limit: 2,
  };
  mytime: any;
  total_records;
  start = 0;
  end = 10;
  constructor(
    private route: ActivatedRoute,
    private thiService: ThiService,
    private fb: FormBuilder,
    private router: Router,
    private pageScrollService: PageScrollService,
    private ngmodal: NgbModal,
    @Inject(DOCUMENT) private document: any
  ) {
    this.formDethi = this.fb.group({
      performer: new FormControl(''),
      Class: new FormControl(''),
      _id: new FormControl(''),
      idDeThi: new FormControl(''), // ma de
      kyThi: new FormControl(''), // nam hoc
      idBailam: new FormControl(''), // _id bai lam
      detailTest: this.fb.array([]),
      maDeThi: new FormControl(''),
      status: new FormControl(false),
    });
  }
  // ngAfterViewChecked(): void {
  //   clearInterval(this.mytime);
  // }

  ngOnInit(): void {
    this.loadAll(this.params.current_page);
    this.TimeAuto();
  }
  get performer() {
    return this.formDethi.get('performer');
  }
  get Class() {
    return this.formDethi.get('Class');
  }
  get idDeThi() {
    return this.formDethi.get('idDeThi');
  }
  get maDeThi() {
    return this.formDethi.get('maDeThi');
  }
  get kyThi() {
    return this.formDethi.get('kyThi');
  }
  get idBailam() {
    return this.formDethi.get('idBailam');
  }
  get answers(): FormArray {
    return this.formDethi.get('detailTest').get('answers') as FormArray; // get list answer
  }
  get detailTest(): FormArray {
    return this.formDethi.get('detailTest') as FormArray; // get list answer
  }
  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });

    this.activeSection = i;
  }

  setTimeWork(data) {
    const dateE = data.timeEnd.split(',');
    const dateS = data.timeStart.split(',');
    const ngayStart = dateS[0];
    const timeStart = dateS[1];
    const ngayEnd = dateE[0];
    const timeEnd = dateE[1];

    const date = new Date();
    date.setFullYear(
      ngayEnd.split('-')[2],
      ngayEnd.split('-')[1] - 1,
      ngayEnd.split('-')[0]
    );
    date.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);

    const datestart = new Date();
    datestart.setFullYear(
      ngayStart.split('-')[2],
      ngayStart.split('-')[1] - 1,
      ngayStart.split('-')[0]
    );
    datestart.setHours(timeStart.split(':')[0], timeStart.split(':')[1], 0);
    this.time = (date.getTime() - datestart.getTime()) / 60000;
  }

  loadAll(page) {
    let id = this.route.snapshot.paramMap.get('id');

    if (page < 0 || !page) {
      page = 1;
    }
    this.params.current_page = page;
    this.thiService.getById(id).subscribe(
      (res) => {
        let data = res.body.data;
        let goc = res.body.data1;
        this.Data = res.body.data;
        this.setTimeWork(this.Data);
        let text = this.Data.kyThi.split(' ');
        this.namHoc = text[2];
        this.kThi = text[6];
        this.Dethi = res.body.data.detailTest;

        this.total_records = res.body.data.detailTest.length;

        this.findStart();
        this.findEnd();
        if (data) {
          this.getDateToForm(data, goc);
        } else {
          alert('Bài làm trống !');
        }
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

  getDateToForm(data, goc) {
    this.formDethi.get('Class').setValue(data.Class);
    this.formDethi.get('_id').setValue(data._id);
    this.formDethi.get('performer').setValue(data.performer);
    this.formDethi.get('idDeThi').setValue(data.idDeThi);
    this.formDethi.get('maDeThi').setValue(data.maDeThi);
    this.formDethi.get('kyThi').setValue(data.kyThi);
    this.formDethi.get('idBailam').setValue(goc._id);
    const control = <FormArray>this.formDethi.controls['detailTest'];

    data.detailTest.map((item, index) => {
      let fb = this.fb.group({
        question: new FormControl(item.question),
        soLanSuDung: new FormControl(item.soLanSuDung),
        soLanTraLoiDung: new FormControl(item.soLanTraLoiDung),
        answers: this.fb.array([]),
        answerUser: this.fb.array([]),
        length: new FormControl(),
      });
      control.push(fb);
      const fg = <FormArray>control.controls[index * 1].get('answers');
      // create formArray container one formGroup
      item.answers.map((ans, index) => {
        let answer = this.fb.group({
          answer: new FormControl(ans.answer, [Validators.required]),
          bio: new FormControl(ans.bio), // các câu đã chọn thì là true câu đó,
        });
        fg.push(answer);
      });
      const ans = <FormArray>control.controls[index].get('answerUser');
      item.answerUser.map((ansU, index) => {
        let answerUser = this.fb.group({
          answer: new FormControl(ansU.answer),
        });
        ans.push(answerUser);
      });
      // control.controls[index].get('length').setValue(ind);
    });
    goc.detailTest.map((item, index) => {
      var ind = 0;
      item.answers.map((ans, index) => {
        if (ans.bio == true) {
          // phân biệt radio hay checkbox
          ind += 1;
        }
      });
      control.controls[index].get('length').setValue(ind);
    });
  }

  updateOneChooseRadio(value, data, index, indexan) {
    this.anserUserEmpety = [];
    let answerUser = this.fb.group({
      // khai bao đối tượng answerUser for each question
      answer: new FormControl(''),
    });
    const control = <FormArray>this.formDethi.controls['detailTest'];
    // lam mới đáp án người dùng đã chọn.
    const fg = <FormArray>control.controls[index].get('answerUser');
    if (fg.value.length > 0) {
      fg.value.map((item, index) => {
        fg.removeAt(index);
      });
    }
    const ans = <FormArray>control.controls[index * 1].get('answers');
    data.value.answers.map((item, index) => {
      ans.controls[index].get('bio').setValue(false); // mỗi lần chọ radio thì set value tất cả về false
      if (item.answer == value.value.answer) {
        ans.controls[index].get('bio').setValue(true); // nếu thỏa đk bio thành true
        answerUser.get('answer').setValue(item.answer);
      }
    });
    fg.push(answerUser); // thêm câu trả lời của user vào mảng

    this.thiService.NopBai(this.formDethi.value).subscribe(
      (res) => {
        //  console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  updateOneChooseCheckbox(value, data, index) {
    this.anserUserEmpety = [];
    const control = <FormArray>this.formDethi.controls['detailTest'];
    const fg = <FormArray>control.controls[index].get('answerUser');
    // nếu bio = true mà answerUser không có gí trị này thì thêm vào
    // nếu bio=false ma ansrUser có giá trị thì xóa đi giá trị tại vị trí đó
    data.value.answers.map((item, index) => {
      var fla = 0;
      if (item.bio === true) {
        data.value.answerUser.map((ans, ind) => {
          if (ans.answer == item.answer) {
            fla = 1;
          }
        });
        if (fla == 0) {
          let answerUser = this.fb.group({
            answer: new FormControl(item.answer),
          });
          fg.push(answerUser);
        }
      } else {
        data.value.answerUser.map((ans, ind) => {
          if (ans.answer == item.answer) {
            fg.removeAt(ind);
          }
        });
      }
    });

    this.thiService.NopBai(this.formDethi.value).subscribe(
      (res) => {
        //   console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  TimeAuto() {
    this.mytime = setInterval(() => {
      const dateE = this.Data.timeEnd.split(',');
      const ngayEnd = dateE[0];
      const timeEnd = dateE[1];
      const date = new Date();
      date.setFullYear(
        ngayEnd.split('-')[2],
        ngayEnd.split('-')[1] - 1,
        ngayEnd.split('-')[0]
      );

      date.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);

      const dateN = new Date();

      const second = date.getTime() - dateN.getTime();
      if (second < 0) {
        clearInterval(this.mytime);
        alert('Đã hết thời gian làm bài !');
        this.router.navigate(['/nhacuatoi']);
      }

      if ((date.getTime() - dateN.getTime()) / 60000 > 1440) {
        this.ngay = Math.floor((date.getTime() - dateN.getTime()) / 86400000);
        if ((date.getTime() - dateN.getTime()) % 86400000 != 0) {
          let s = this.ngay * 86400000;
          this.gio = Math.floor((second - s) / 3600000);

          if (
            (date.getTime() - dateN.getTime() - this.ngay * 86400000) %
              3600000 !=
            0
          ) {
            let s = this.ngay * 86400000 + this.gio * 3600000;
            this.phut = Math.floor((second - s) / 60000);
            if (
              (date.getTime() -
                dateN.getTime() -
                (this.ngay * 86400000 + this.gio * 3600000)) %
                60000 !=
              0
            ) {
              let s =
                this.ngay * 86400000 + this.gio * 3600000 + this.phut * 60000;
              this.giay = Math.floor((second - s) / 1000);
            }
          }
        }
      } else if (
        (date.getTime() - dateN.getTime()) / 60000 >= 60 &&
        (date.getTime() - dateN.getTime()) / 60000 <= 1440
      ) {
        this.ngay = 0;
        // gio
        this.gio = Math.floor(second / 3600000);
        // có dư hay không nếu có thì tính phút
        if (second % 3600000 != 0) {
          let s = this.gio * 3600000;
          this.phut = Math.floor((second - s) / 60000);
          if ((second - s) % 60000 != 0) {
            let s = this.gio * 3600000 + this.phut * 60000;
            this.giay = Math.floor((second - s) / 1000);
          }
        }
      } else {
        this.ngay = 0;
        this.gio = 0;
        this.phut = Math.floor((date.getTime() - dateN.getTime()) / 60000);
        if ((date.getTime() - dateN.getTime()) % 60000 != 0) {
          this.giay = Math.floor(
            (date.getTime() - dateN.getTime() - this.phut * 60000) / 1000
          );
        }
      }
    }, 1000);
  }
  submit() {
    // console.log(this.formDethi.value);
    const data = this.formDethi.value;
    data.detailTest.map((item, index) => {
      if (item.answerUser.length == 0) {
        this.ischeckChooseAnser = true;
        this.anserUserEmpety.push(item.question);
      }
    });
    // this.TimeAuto();
    if (this.anserUserEmpety.length == 0) {
      const RF = this.ngmodal.open(NotificationComponent, {
        centered: true,
        size: 'md',
      });
      RF.componentInstance.title = 'Nộp bài';
      RF.componentInstance.text = 'Bạn muốn nộp bài thi?';
      RF.componentInstance.comfirm.subscribe((res) => {
        if (res) {
          this.formDethi.get('status').setValue(true);
          this.thiService.NopBai(this.formDethi.value).subscribe(
            (res) => {
              if (res.status == 200) {
                clearInterval(this.mytime);
                alert('Nộp bài thành công !');
                window.history.back();
              }
            },
            (error: HttpErrorResponse) => {
              console.log(error);
            }
          );
        }
      });
    } else {
      alert('Bạn cần hoàn thành các câu hỏi trước khi nộp bài !');
    }
  }
}
