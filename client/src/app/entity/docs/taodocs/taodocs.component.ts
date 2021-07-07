import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  FileSystemDirectoryEntry,
  FileSystemFileEntry,
  NgxFileDropEntry,
} from 'ngx-file-drop';
import {
  faImage,
  faFileAlt,
  faBan,
  faTrash,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { SERVER_IMAGE } from 'src/app/app.contants';
import { ShareService } from 'src/app/share/share.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DocsService } from '../docs.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TailieuService } from '../../tailieu/tailieu.service';
@Component({
  selector: 'app-taodocs',
  templateUrl: './taodocs.component.html',
  styleUrls: ['./taodocs.component.scss'],
})
export class TaodocsComponent implements OnInit {
  faImage = faImage;
  faFileAlt = faFileAlt;
  faCandyCane = faBan;
  faSave = faSave;
  faTrash = faTrash;
  TailieuFrom: FormGroup;
  success: boolean; // kiểm tra đã đầy đủ thông tin chưa
  isvalidator: boolean = false;
  image: boolean = false;
  isFile: boolean = false;
  urlIma: string = '';
  questionCheckbio: Array<any> = [];
  flas: any;
  checkbio: boolean = true;
  checkSumAnswer: boolean = true;
  Dethi: any = [];
  checkavatar: boolean = true;
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    search: '',
    theme: '',
    level: '',
  };

  constructor(
    private docService: DocsService,
    private fb: FormBuilder,
    private ss: ShareService,
    private loadService: NgxUiLoaderService,
    private ngModel: NgbModal,
    private tailieuService: TailieuService,
    private router: ActivatedRoute
  ) {
    this.TailieuFrom = this.fb.group({
      chuong: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
      DsNoiDung: this.fb.array([
        // create formArray container one formGroup
        this.fb.group({
          tieuDe: new FormControl(''),
          noidung: this.fb.array([]),
          // image: this.fb.array([]),
          // video: this.fb.array([]),
          // anh: new FormControl(''),
          // video: new FormControl(''),
        }),
      ]),
      detailTest: this.fb.array([]),
    });
  }
  ngOnInit() {}
  get chuong() {
    return this.TailieuFrom.get('chuong');
  }
  get DsNoiDung(): FormArray {
    return this.TailieuFrom.get('DsNoiDung') as FormArray; // get list answer
  }
  get detailTest(): FormArray {
    return this.TailieuFrom.get('detailTest') as FormArray; // get list answer
  }

  addContent() {
    this.isvalidator = false;
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    let fg = this.fb.group({
      tieuDe: new FormControl('', [Validators.required]),
      noidung: this.fb.array([
        // this.fb.group({
        //   text: new FormControl('', [Validators.required]),
        // }),
      ]),
      image: this.fb.array([]),
    });
    control.push(fg);
  }
  deletecontent(index) {
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    control.removeAt(index);
  }

  andnoidung(index, flag) {
    this.isvalidator = false;
    //flag phân biệt text hay ima
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    const fg = <FormArray>control.controls[index * 1].get('noidung');
    if (flag == 'text') {
      let fb = this.fb.group({
        text: new FormControl('', [Validators.required]),
        bio: new FormControl('text', [Validators.required]),
      });
      fg.push(fb);
    }
    if (flag == 'anh') {
      // img
      let fb = this.fb.group({
        text: new FormControl('', [Validators.required]),
        bio: new FormControl('anh', [Validators.required]),
      });
      fg.push(fb);
    }
  }
  deletenoidung(indexQ, index) {
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    const fg = <FormArray>control.controls[indexQ * 1].get('noidung');
    fg.removeAt(index);
  }

  // anh

  // addAnh(index) {
  //   const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
  //   const fg = <FormArray>control.controls[index * 1].get('image');
  //   let fb = this.fb.group({
  //     name: new FormControl('', [Validators.required]),
  //   });

  //   fg.push(fb);
  // }
  // deleteAnh(indexQ, index) {
  //   const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
  //   const fg = <FormArray>control.controls[indexQ * 1].get('image');
  //   fg.removeAt(index);
  // }

  //// caau hỏi

  andAnswer(index) {
    this.checkbio = true;
    this.isvalidator = false;
    this.checkSumAnswer = true;
    const control = <FormArray>this.TailieuFrom.get('detailTest');
    const fg = <FormArray>control.controls[index * 1].get('answers');
    let fb = this.fb.group({
      answer: new FormControl('', [Validators.required]),
      bio: new FormControl(false),
    });
    fg.push(fb);
  }
  deleteAnswer(indexQ, index) {
    const control = <FormArray>this.TailieuFrom.get('detailTest');
    const fg = <FormArray>control.controls[indexQ * 1].get('answers');
    fg.removeAt(index);
  }

  addQuestion() {
    this.isvalidator = false; // để các trường còn trống
    this.checkSumAnswer = true; // check câu hỏi chưa có câu trả lời
    const control = <FormArray>this.TailieuFrom.get('detailTest');
    let fg = this.fb.group({
      question: new FormControl('', [Validators.required]),
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
    const control = <FormArray>this.TailieuFrom.get('detailTest');
    // console.log(this.duplicate);
    control.removeAt(index);
  }

  public fileOver(event) {}
  closeAvatar() {
    this.checkavatar = true;
    this.TailieuFrom.get('avatar').setValue('');
  }
  closeImage(i, h) {
    this.image = false;
    // const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    // const fg = <FormArray>control.controls[i * 1].get('image');
    // fg.controls[h].get('name').setValue('');
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    const fg = <FormArray>control.controls[i * 1].get('noidung');
    fg.controls[h].get('text').setValue('');
  }
  setValidator() {
    this.isvalidator = true;
    alert('Tồn tại trường còn trống !');
    // console.log(
    //   this.checkbio + ' ' + this.checkSumAnswer + ' ' + this.isvalidator
    // );
  }
  public fileLeave(event) {}
  public dropped(files: NgxFileDropEntry[], index, h, bio) {
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
          // console.log(file);
          this.ss.uploadImage(formData).subscribe(
            (res) => {
              if (res.status == 200) {
                if (bio == 'avatar') {
                  this.TailieuFrom.get('avatar').setValue(file.name);
                  this.checkavatar = false;
                }
                if (bio == 'anh') {
                  const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
                  // console.log(control.value);

                  const fg = <FormArray>(
                    control.controls[index * 1].get('noidung')
                  );
                  fg.controls[h].get('text').setValue(file.name);
                }
                // this.TailieuFrom.get('avatar').setValue(file.name);
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
  cancel() {
    window.history.back();
  }

  submit() {
    this.questionCheckbio = [];
    this.success = true;
    this.TailieuFrom.value.detailTest.map((it, ind) => {
      if (it.answers.length > 0) {
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
      } else {
        this.checkSumAnswer = false;
        this.success = false;
        alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');

        return;
      }
    });
    if (this.questionCheckbio.length != 0 && this.checkbio == false) {
      this.success = false;
      alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
      return;
    }

    if (this.success) {
      let modal = this.ngModel.open(NotificationComponent, {
        size: 'md',
        centered: true,
      });
      modal.componentInstance.title = `Thêm nội dung ${this.TailieuFrom.value.chuong.substring(
        0,
        8
      )}`;
      modal.componentInstance.text = `Bạn đang muốn thêm nội dung của ${this.TailieuFrom.value.chuong.substring(
        0,
        8
      )} ?`;
      modal.componentInstance.comfirm.subscribe((resp) => {
        if (resp) {
          // let id = this.router.snapshot.paramMap.get('id');

          this.docService.create(this.TailieuFrom.value).subscribe(
            (res) => {
              if (res) {
                if (res.status == 200) {
                  alert('Tạo chương mới thành công !');
                  this.loadService.start();
                }
              }
              this.loadService.stop();
              window.history.back();
            },
            (error: HttpErrorResponse) => {
              alert('Tiêu đề chương đã tồn tại. Hãy kiểm tra và thử lại sau !');
            }
          );
        }
      });
    }
    // console.log(this.TailieuFrom.value);
  }
}
