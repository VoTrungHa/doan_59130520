import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ThiService } from '../../thi/thi.service';
import { MyhomeService } from '../myhome.service';

@Component({
  selector: 'app-thanhtich',
  templateUrl: './thanhtich.component.html',
  styleUrls: ['./thanhtich.component.scss'],
})
export class ThanhtichComponent implements OnInit {
  faCheck = faCheck;
  Dethi: any;
  Data: any;
  proFile: any;
  namHoc: any;
  kThi: any;
  formDethi: FormGroup;
  truethu: boolean = true;
  activeSection: any;
  ischeckChooseAnser: boolean = false; // kiểm tran câu trả lời trống.
  anserUserEmpety: Array<any> = [];

  answerTrue: any;
  time: any;
  ngay: any;
  gio: any;
  phut: any;
  giay: any;
  params: any = {
    current_page: 1,
    limit: 2,
  };
  total_records;
  start = 0;
  end = 10;
  bailam: any = {
    Class: '',
    performer: '',
    idDeThi: '',
    kyThi: '',
    timeStart: '',
    timeEnd: '',
    maDeThi: '',
    createBy: '',
    idPerformer: '',
    status: Boolean,
    content: '',
    avatar: '',
  };

  constructor(
    private route: ActivatedRoute,
    private thiService: ThiService,
    private fb: FormBuilder,
    private myhomeService: MyhomeService,
    private ngmodal: NgbModal
  ) {
    this.formDethi = this.fb.group({
      performer: new FormControl(''),
      Class: new FormControl(''),
      idDeThi: new FormControl(''), // ma de
      kyThi: new FormControl(''), // nam hoc
      idBailam: new FormControl(''), // _id bai lam
      detailTest: this.fb.array([]),
      maDeThi: new FormControl(''),
      status: new FormControl(false),
    });
  }
  ngOnInit(): void {
    // console.log(this.formDethi.value);
    this.loadAll();
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

  getProFiles(id) {
    this.myhomeService.getById(id).subscribe(
      (res) => {
        // console.log(res.body.data);
        this.proFile = res.body.data;
        console.log(this.proFile);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getDateToForm(data, goc) {
    this.formDethi.get('Class').setValue(data.Class);
    this.formDethi.get('performer').setValue(data.performer);
    this.formDethi.get('idDeThi').setValue(data.idDeThi);
    this.formDethi.get('maDeThi').setValue(data.maDeThi);
    this.formDethi.get('kyThi').setValue(data.kyThi);
    this.formDethi.get('idBailam').setValue(goc._id);
    const control = <FormArray>this.formDethi.controls['detailTest'];

    data.detailTest.map((item, index) => {
      let fb = this.fb.group({
        question: new FormControl(item.question),
        answers: this.fb.array([]),
        answerUser: this.fb.array([]),
        length: new FormControl(),
        result: new FormControl(item.result),
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

    console.log(this.formDethi.value);
  }
  setTimeWork(data) {
    const dateE = data.timeEnd.split(',');
    const dateS = data.timeStart.split(',');
    const ngayStart = dateS[0];
    const timeStart = dateS[1];
    const ngayEnd = dateE[0];
    const timeEnd = dateE[1];

    // console.log(ngayEnd + ' ' + timeEnd);
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
  loadAll() {
    this.route.queryParamMap.subscribe((data) => {
      data.get('dethi');
      let id = this.route.snapshot.paramMap.get('id');
      let profile = JSON.parse(localStorage.getItem('listProfiles'));
      const data1 = {
        id: data.get('dethi'), // id đe thi
        idPerformer: id, // id người dùng,
        createBy: `${profile.infor.firstName} ${profile.infor.lastName}`,
        role: `${profile.authorities}`,
      };
      // console.log(data1);
      // lấy đề thi theo người làm và ma id đề thi
      this.myhomeService.getDeThiDetailByIdandPerformer(data1).subscribe(
        (res) => {
          if (res.body.bailam) {
            // người dùng đã từng làm bài thi show ra bai làm
            this.Data = res.body.data;
            this.setTimeWork(res.body.data);
            let text = this.Data.kyThi.split(' ');
            this.namHoc = text[2];
            this.kThi = text[6];
            this.Dethi = res.body.data.detailTest;
            this.answerTrue = res.body.data1.detailTest;
            this.getDateToForm(res.body.data, res.body.data1);
          } else {
            // nếu cguwa có bài thi thì phải tạo mới rồi cho điểm bằng 0;
            this.getProFiles(id); // lấy thông tin người dùng
            this.myhomeService.getDeThiDetailById(data.get('dethi')).subscribe(
              (dethi) => {
                // lấy ra để thi nếu sinh viên đó chưa từng làm bài

                let firstName = this.proFile.infor.firstName;
                let lastName = this.proFile.infor.lastName;
                let template = '_1_ _2_';
                var fullName = template
                  .replace('_1_', firstName)
                  .replace('_2_', lastName);
                const Dethi = dethi.body.data;
                // console.log(Dethi);
                this.bailam.performer = fullName;
                this.bailam.Class = Dethi.Class[0].name;
                this.bailam.idDeThi = Dethi._id;
                this.bailam.kyThi = Dethi.kyThi;
                this.bailam.timeStart = Dethi.timeStart;
                this.bailam.timeEnd = Dethi.timeEnd;
                this.bailam.maDeThi = Dethi.id;
                this.bailam.detailTest = Dethi.detailTest;
                this.bailam.idPerformer = this.proFile._id;
                this.bailam.status = true;
                this.bailam.nameCreateBy = Dethi.createBy.name;
                this.bailam.createBy = Dethi.createBy.id;
                this.bailam.content = Dethi.content;
                this.bailam.avatar = Dethi.avatar;
                // console.log(this.bailam);
                // tạo bài làm mới cho sinh viên
                this.myhomeService.createBaiLam(this.bailam).subscribe(
                  (res) => {
                    this.myhomeService.getBailamById(res.body.data).subscribe(
                      (bl) => {
                        // hiển thị dữ liệu ra form
                        this.Data = bl.body.data;
                        this.setTimeWork(bl.body.data);
                        let text = this.Data.kyThi.split(' ');
                        this.namHoc = text[2];
                        this.kThi = text[6];
                        this.Dethi = bl.body.data.detailTest;
                        this.answerTrue = bl.body.data1.detailTest;
                        this.getDateToForm(bl.body.data, bl.body.data1);
                      },
                      (error: HttpErrorResponse) => {
                        console.log(error);
                      }
                    );
                  },
                  (error: HttpErrorResponse) => {
                    console.log(error);
                  }
                );
              },
              (error: HttpErrorResponse) => {
                console.log(error);
              }
            );
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    });

    // this.myhomeService.getDeThiDetailByIdandPerformer()
  }
  backone() {
    window.history.back();
  }
}
