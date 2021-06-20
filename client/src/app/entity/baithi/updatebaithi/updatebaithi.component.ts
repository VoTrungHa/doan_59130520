import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  faBan,
  faDownload,
  faFileAlt,
  faFolder,
  faSave,
  faSyncAlt,
  faTrash,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
import { ShareService } from 'src/app/share/share.service';
import { Baithi } from '../baithi.model';
import { BaithiService } from '../baithi.service';
import { NumberValidatorsService } from '../NumberValidatorsService ';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ChooseQuestionComponent } from '../choose-question/choose-question.component';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { SERVER_IMAGE } from 'src/app/app.contants';

@Component({
  selector: 'app-updatebaithi',
  templateUrl: './updatebaithi.component.html',
  styleUrls: ['./updatebaithi.component.scss'],
})
export class UpdatebaithiComponent implements OnInit {
  faTrash = faTrash;
  faFileAlt = faFileAlt;
  faFolder = faFolder;
  faBan = faBan;
  faSyncAlt = faSyncAlt;
  faSave = faSave;
  faUpload = faUpload;
  faDownload = faDownload;
  formDethi: FormGroup;
  isvalidator: boolean = false;
  lengthQuestion: number = 0;
  ismulti: boolean = true;
  lops: Array<any>;
  nameLop: string;
  isKyThi: boolean = true;
  kyThis: Array<any>;
  namHoc: string;

  themes:Array<any>=[];
  // ccheck anser did choose trueanswers yet;
  checkbio: boolean = true;
  questionCheckbio: Array<any> = [];
  flas: any;
  ky = ['I', 'II'];

  storeUpload: Array<any>;
  duplicate: Array<any> = [];
  isduplicate: boolean = false;

  isFile: boolean = false;
  image: boolean = false;
  urlIma: string = '';
  Baithi: Baithi;
  constructor(
    private ss: ShareService,
    private fb: FormBuilder,
    private baiThiService: BaithiService,
    private loadService: NgxUiLoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: NgbModal
  ) {
    this.formDethi = this.fb.group({
      id: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
      confirmationBy: new FormControl(''),
      timeStart: this.fb.group({
        year: new FormControl([Validators.required, Validators.min(2020)]),
        month: new FormControl([
          Validators.required,
          Validators.min(1),
          Validators.max(12),
        ]),
        day: new FormControl([
          Validators.required,
          Validators.min(1),
          Validators.max(31),
        ]),
        hours: new FormControl([
          Validators.required,
          Validators.min(0),
          Validators.max(23),
        ]),
        minute: new FormControl([
          Validators.required,
          Validators.min(0),
          Validators.max(60),
        ]),
      }),
      timeEnd: this.fb.group({
        year: new FormControl([Validators.required, Validators.min(2020)]),
        month: new FormControl([
          Validators.required,
          Validators.min(1),
          Validators.max(12),
        ]),
        day: new FormControl([
          Validators.required,
          Validators.min(1),
          Validators.max(31),
        ]),
        hours: new FormControl([
          Validators.required,
          Validators.min(0),
          Validators.max(23),
        ]),
        minute: new FormControl([
          Validators.required,
          Validators.min(0),
          Validators.max(60),
        ]),
      }),
      note: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      Class: new FormControl('', [Validators.required]),
      kyThi: new FormControl('', [Validators.required]),
      detailTest: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.loadData();
    this.getLop();
    this.getTheme();
    this.getKyThi();
  }

  get answers(): FormArray {
    return this.formDethi.get('detailTest').get('answers') as FormArray; // get list answer
  }
  get detailTest(): FormArray {
    return this.formDethi.get('detailTest') as FormArray; // get list answer
  }
  get timeStart() {
    return this.formDethi.get('timeStart'); // get list answer
  }
  get confirmationBy() {
    return this.formDethi.get('confirmationBy'); // get list answer
  }
  get timeEnd(): FormArray {
    return this.formDethi.get('timeEnd') as FormArray; // get list answer
  }
  get content() {
    return this.formDethi.get('content');
  }
  get id() {
    return this.formDethi.get('id');
  }
  get Class() {
    return this.formDethi.get('Class') as FormArray;
  }
  get password() {
    return this.formDethi.get('password');
  }
  get kyThi() {
    return this.formDethi.get('kyThi');
  }
  get note() {
    return this.formDethi.get('note');
  }

  getKyThi() {
    this.ss.getAllKyThi().subscribe(
      (res) => {
        this.kyThis = res.body.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getTheme() {
    this.ss.getAllTheme().subscribe(
      (res) => {
        this.themes = res.body.data;
        console.log(this.themes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  loadData() {
    let id = this.route.snapshot.paramMap.get('id');
    this.baiThiService.getOneById(id).subscribe(
      (res) => {
        this.Baithi = res.body.data;
        this.setValueForForm(res.body.data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  onChangeDate(value) {
    console.log(this.formDethi.get('timeStart'));
    let s = this.formDethi.get('timeStart').get(`${value}`).value;
    this.formDethi.get('timeEnd').get(`${value}`).setValue(s);
  }
  setValueForForm(data) {
    console.log(data);
    this.image = true;
    this.formDethi.get('content').setValue(data.content);
    if (data.avatar == '') {
      this.urlIma = '../../../../assets/Images/text1.png';
    } else {
      this.urlIma = `${SERVER_IMAGE}${data.avatar}`;
    }
    this.formDethi.get('avatar').setValue(data.avatar);
    this.formDethi.get('note').setValue(data.note);
    this.formDethi.get('kyThi').setValue(data.kyThi);
    this.formDethi.get('id').setValue(data.id);
    this.formDethi.get('password').setValue(data.password);
    var clss = [];
    data.Class.map((cls, index) => {
      clss.push(cls.name);
    });

    let dateS = data.timeStart.split(',')[0].split('-');
    let timeS = data.timeStart.split(',')[1].split(':');

    let dateE = data.timeEnd.split(',')[0].split('-');
    let timeE = data.timeEnd.split(',')[1].split(':');
    this.formDethi.get('timeStart').get('day').setValue(dateS[0]);
    this.formDethi.get('timeStart').get('month').setValue(dateS[1]);
    this.formDethi.get('timeStart').get('year').setValue(dateS[2]);
    this.formDethi.get('timeStart').get('hours').setValue(timeS[0]);
    this.formDethi.get('timeStart').get('minute').setValue(timeS[1]);

    this.formDethi.get('timeEnd').get('day').setValue(dateE[0]);
    this.formDethi.get('timeEnd').get('month').setValue(dateE[1]);
    this.formDethi.get('timeEnd').get('year').setValue(dateE[2]);
    this.formDethi.get('timeEnd').get('hours').setValue(timeE[0]);
    this.formDethi.get('timeEnd').get('minute').setValue(timeE[1]);

    this.formDethi.get('Class').setValue(clss);
    const control = <FormArray>this.formDethi.controls['detailTest'];
    data.detailTest.map((item, index) => {
      let fb = this.fb.group({
        question: new FormControl(item.question, [Validators.required]),
        theme: new FormControl(item.theme, [Validators.required]),
        level: new FormControl(item.level, [Validators.required]),
        answers: this.fb.array([]),
      });
      control.push(fb);
      const fg = <FormArray>control.controls[index * 1].get('answers');
      // create formArray container one formGroup
      item.answers.map((ans, index) => {
        let answer = this.fb.group({
          answer: new FormControl(ans.answer, [Validators.required]),
          bio: new FormControl(ans.bio),
        });
        fg.push(answer);
      });
    });
  }

  getLop() {
    this.ss.getAll().subscribe(
      (res) => {
        this.lops = res.body.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  onBlurHocKy(namhoc, hocky) {
    this.ss.createKyThi({ namhoc, hocky }).subscribe(
      (res) => {
        console.log(res);
        this.isKyThi = true;
        this.getKyThi();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  onBlur(e) {
    this.ss.createLop(e).subscribe(
      (res) => {
        this.getLop();
        this.ismulti = !this.ismulti;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  andAnswer(index) {
    const control = <FormArray>this.formDethi.get('detailTest');
    const fg = <FormArray>control.controls[index * 1].get('answers');
    let fb = this.fb.group({
      answer: new FormControl('', [Validators.required]),
      bio: new FormControl(false),
    });

    fg.push(fb);
  }
  deleteAnswer(indexQ, index) {
    const control = <FormArray>this.formDethi.get('detailTest');
    const fg = <FormArray>control.controls[indexQ * 1].get('answers');
    fg.removeAt(index);
  }

  addQuestion() {
    const control = <FormArray>this.formDethi.get('detailTest');
    let fg = this.fb.group({
      question: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      answers: this.fb.array([
        // create formArray container one formGroup
        // this.fb.group({
        //   answer: new FormControl('', [Validators.required]),
        //   bio: new FormControl(false),
        // }),
      ]),
    });
    control.push(fg);
  }
  deleteQuestion(index) {
    const control = <FormArray>this.formDethi.get('detailTest');
    // console.log(control.controls[index].value.question);
    if (this.duplicate.length > 0) {
      this.duplicate.map((item, inde) => {
        console.log(control.controls[index].value.question);
        if (
          item.toLowerCase() ==
          control.controls[index].value.question.toLowerCase()
        ) {

          this.duplicate.splice(inde, 1);
        }
      });
    }
    console.log(this.duplicate);
    control.removeAt(index);
  }
  updateDethi() {
    let profile = JSON.parse(localStorage.getItem('listProfiles'));

    this.checkbio = false;
    this.questionCheckbio = [];
    this.formDethi.value.detailTest.map((it, ind) => {
      this.flas = 0;
      it.answers.map((ite, inde) => {
        if (ite.bio == true) {
          this.flas++;
        }
      });
      if (this.flas == 0) {
        this.questionCheckbio.push(it.question);
        this.checkbio = false;
      }
    });
    console.log(this.questionCheckbio.length + '  ' + this.checkbio);
    if (this.questionCheckbio.length != 0 && this.checkbio == false) {
      alert('Đề thi có chứa câu hỏi chưa hoàn tất !');
    } else {
      let days = this.formDethi.get('timeStart').get('day').value;
      let months = this.formDethi.get('timeStart').get('month').value;
      let years = this.formDethi.get('timeStart').get('year').value;
      let hours = this.formDethi.get('timeStart').get('hours').value;
      let minutes = this.formDethi.get('timeStart').get('minute').value;

      let daye = this.formDethi.get('timeEnd').get('day').value;
      let monthe = this.formDethi.get('timeEnd').get('month').value;
      let yeare = this.formDethi.get('timeEnd').get('year').value;
      let houre = this.formDethi.get('timeEnd').get('hours').value;
      let minutee = this.formDethi.get('timeEnd').get('minute').value;

      const dateS = new Date();
      dateS.setFullYear(years, months, days);
      dateS.setHours(hours, minutes);
      const dateE = new Date();
      dateE.setFullYear(yeare, monthe, daye);
      dateE.setHours(houre, minutee);
      if (dateS.getTime() > dateE.getTime()) {
        alert('Thời Gian kết thúc không hợp lệ !');
      } else {
        let detail = this.formDethi.get('detailTest')['controls'];
        if (detail.length == 0) {
          let modal = this.modal.open(NotificationComponent);
          modal.componentInstance.title = `Tạo đề thi ${
            this.formDethi.get('id').value
          }`;
          modal.componentInstance.text = `Hiện tại đề thi chưa có câu hỏi, bạn có muốn tiếp tục không ?`;
          modal.componentInstance.comfirm.subscribe((res) => {
            if (res) {
              var ArrClass = [];
              let id = this.route.snapshot.paramMap.get('id');
              this.formDethi.get('Class').value.map((item) => {
                const text = { name: item };
                ArrClass.push(text);
              });
              const data = this.formDethi.value;
              data.Class = ArrClass;
              data.status = true;
              // const stor = JSON.parse(localStorage.getItem('listProfiles'));
               data.idCreateBy = profile._id;
              // data.createBy = {
              //   id: stor._id,
              //   name: `${stor.infor.firstName} ${stor.infor.lastName}`,
              // };
              this.baiThiService.update(data, id).subscribe(
                (res) => {
                  if (res.status == 200) {
                    alert('Đề thi đã thay đổi thành công !');
                    this.loadService.start();
                    this.router.navigate(['/baithi']);
                  }
                  this.loadService.stop();
                  console.log(res);
                },
                (error: HttpErrorResponse) => {
                  alert(
                    `Đã tồn tại đề ${this.formDethi.get('id').value} trong ${
                      this.formDethi.get('kyThi').value
                    }`
                  );
                }
              );
            }
          });
        } else {
          var ArrClass = [];
          let id = this.route.snapshot.paramMap.get('id');
          this.formDethi.get('Class').value.map((item) => {
            const text = { name: item };
            ArrClass.push(text);
          });
          const data = this.formDethi.value;
          data.Class = ArrClass;
          data.status = true;
            data.idCreateBy = profile._id;
          // const stor = JSON.parse(localStorage.getItem('listProfiles'));

          // data.createBy = {
          //   id: stor._id,
          //   name: `${stor.infor.firstName} ${stor.infor.lastName}`,
          // };
          this.baiThiService.update(data, id).subscribe(
            (res) => {
              if (res.status == 200) {
                alert('Đề thi đã thay đổi thành công !');
                this.loadService.start();
                this.router.navigate(['/baithi']);
              }
              this.loadService.stop();
            },
            (error: HttpErrorResponse) => {
              alert(
                `Đã tồn tại đề ${this.formDethi.get('id').value} trong ${
                  this.formDethi.get('kyThi').value
                }`
              );
            }
          );
        }
      }
    }
  }

  ///show data upload lên screen
  setDataUpload(data) {
    this.duplicate = [];
    const control = <FormArray>this.formDethi.controls['detailTest'];
    const leng = control.value.length;
    console.log(control.value);
    if (leng > 0) {
      data.map((item, index) => {
        control.value.map((ite, ind) => {
          if (ite.question.toLowerCase() == item.question.toLowerCase()) {
            this.duplicate.push(item.question);
            return;
          }
        });
        let fb = this.fb.group({
          question: new FormControl(item.question, [Validators.required]),
          theme: new FormControl(item.theme, [Validators.required]),
          level: new FormControl(item.level, [Validators.required]),
          answers: this.fb.array([]),
        });
        control.push(fb);
        const fg = <FormArray>control.controls[index * 1 + leng].get('answers');
        // create formArray container one formGroup
        item.answers.map((ans, index) => {
          let answer = this.fb.group({
            answer: new FormControl(ans.answer, [Validators.required]),
            bio: new FormControl(ans.bio),
          });
          fg.push(answer);
        });
      });
    } else {
      data.map((item, index) => {
        let fb = this.fb.group({
          question: new FormControl(item.question, [Validators.required]),
          theme: new FormControl(item.theme, [Validators.required]),
          level: new FormControl(item.level, [Validators.required]),
          answers: this.fb.array([]),
        });
        control.push(fb);
        const fg = <FormArray>control.controls[index * 1].get('answers');
        // create formArray container one formGroup
        item.answers.map((ans, index) => {
          let answer = this.fb.group({
            answer: new FormControl(ans.answer, [Validators.required]),
            bio: new FormControl(ans.bio),
          });
          fg.push(answer);
        });
      });
    }
    if (this.duplicate.length > 0) {
      alert('Lưu ý: Các câu hỏi trùng nhau sẽ được hệ thông nhắc nhở !');
    }
  }

  upload() {
    let modal = this.modal.open(UploadFileComponent, {
      centered: true,
      size: 'md',
    });
    modal.componentInstance.dataUload.subscribe((res) => {
      this.setDataUpload(res);
    });
  }
  uploadOnWeb() {
    let modal = this.modal.open(ChooseQuestionComponent, { size: 'xl' });
    modal.componentInstance.data.subscribe((res) => {
      this.setDataUpload(res);
    });
  }

  setValidator() {
    console.log(this.formDethi.get('Class').value);
    this.isvalidator = true;
  }

  closeImage() {
    this.image = false;
    this.formDethi.get('avatar').setValue('');
  }
  public fileOver(event) {}

  public fileLeave(event) {}
  public dropped(files: NgxFileDropEntry[]) {
    const formData = new FormData();
    const droppedFile = files[0];
    // Is it a file?
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        // Here you can access the real file
        // console.log(droppedFile.relativePath, file);
        formData.append('file', file);
        let dotfile = files[0].relativePath.split('.')[1];
        if (dotfile === 'jpg' || dotfile === 'png') {
          console.log(file);
          this.ss.uploadImage(formData).subscribe(
            (res) => {
              if (res.status == 200) {
                this.formDethi.get('avatar').setValue(file.name);
                this.image = true;
                this.urlIma = SERVER_IMAGE + file.name;
              }
            },
            (error: HttpErrorResponse) => {
              console.log(error);
            }
          );
        } else {
          this.isFile = true;
        }
      });
    } else {
      // It was a directory (empty directories are added, otherwise only files)
      const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      this.isFile = true;
    }
  }
}
