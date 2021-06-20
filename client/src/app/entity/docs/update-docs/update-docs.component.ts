import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import {
  faImage,
  faFileAlt,
  faBan,
  faTrash,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { DocsService } from '../docs.service';
import { ShareService } from 'src/app/share/share.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from 'src/app/share/notification/notification.component';
@Component({
  selector: 'app-update-docs',
  templateUrl: './update-docs.component.html',
  styleUrls: ['./update-docs.component.scss'],
})
export class UpdateDocsComponent implements OnInit {
  faImage = faImage;
  faFileAlt = faFileAlt;
  faCandyCane = faBan;
  faSave = faSave;
  faTrash = faTrash;
  TailieuFrom: FormGroup;
  isvalidator: boolean = false;
  image: boolean = false;
  isFile: boolean = false;
  success:boolean;
  urlIma: string = '';
  questionCheckbio: Array<any> = [];
  flas: any;
  checkbio: boolean = true;
  checkSumAnswer: boolean = true;

  checkavatar: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private loadService: NgxUiLoaderService,
    private ngModel: NgbModal,
    private docService: DocsService,
    private fb: FormBuilder,
    private ss: ShareService
  ) {
    this.TailieuFrom = this.fb.group({
      chuong: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
      DsNoiDung: this.fb.array([]),
      detailTest: this.fb.array([]),
    });

    this.getDocsById();
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
    console.log(
      this.checkbio + ' ' + this.checkSumAnswer + ' ' + this.isvalidator
    );
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
          console.log(file);
          this.ss.uploadImage(formData).subscribe(
            (res) => {
              if (res.status == 200) {
                if (bio == 'avatar') {
                  this.TailieuFrom.get('avatar').setValue(file.name);
                  this.checkavatar = false;
                }
                if (bio == 'anh') {
                  const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
                  console.log(control.value);

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
  getDocsById() {
    let id = this.router.snapshot.paramMap.get('id');
    this.docService.getDocsById(id).subscribe(
      (res) => {
        this.PassDataToForm(res.body.data);
        console.log(res.body.data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  PassDataToForm(data) {
    console.log(data);
    // chuong: new FormControl('', [Validators.required]),
    //   avatar: new FormControl(''),
    //   DsNoiDung: this.fb.array([
    //     // create formArray container one formGroup
    //     this.fb.group({
    //       tieuDe: new FormControl(''),
    //       noidung: this.fb.array([]),
    //       // image: this.fb.array([]),
    //       // video: this.fb.array([]),
    //       // anh: new FormControl(''),
    //       // video: new FormControl(''),
    //     }),
    //   ]),
    //   detailTest: this.fb.array([]),
    const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    this.TailieuFrom.get('chuong').setValue(data.chuong);
    this.TailieuFrom.get('avatar').setValue(data.avatar);
   const controlTest = <FormArray>this.TailieuFrom.get('detailTest');
    data.detailTest.map((item,index)=>{
        let fg = this.fb.group({
          question: new FormControl(item.question, [Validators.required]),
          answers: this.fb.array([

          ]),
        });
         controlTest.push(fg);
         const ans = <FormArray>controlTest.controls[index * 1].get('answers');
         item.answers.map((ite, index) => {
           let noidung = this.fb.group({
             answer: new FormControl(ite.answer, [Validators.required]),
             bio: new FormControl(ite.bio),
           });
           ans.push(noidung);
         });
    })
    data.DsNoiDung.map((item, index) => {
      let fg = this.fb.group({
        tieuDe: new FormControl(item.tieuDe, [Validators.required]),
        noidung: this.fb.array([]),
      });
      control.push(fg);
      const nd = <FormArray>control.controls[index * 1].get('noidung');
      item.noidung.map((ite, index) => {
        let noidung = this.fb.group({
          text: new FormControl(ite.text, [Validators.required]),
          bio: new FormControl(ite.bio),
        });
        nd.push(noidung);
      });
    });
  }

  cancel()
  {
    window.history.back();
  }

  submit() {
    this.success=true;
    this.questionCheckbio = [];
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
        alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
        this.success=false;
        return;
      }
    });
    if (this.questionCheckbio.length != 0 && this.checkbio == false) {
      this.success=false;
      alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
      return;
    }
    console.log(this.success)
    if(this.success)
    {let modal = this.ngModel.open(NotificationComponent, {
      size: 'md',
      centered: true,
    });
    modal.componentInstance.title = `Thay đổi nội dung ${this.TailieuFrom.value.chuong.substring(
      0,
      8
    )}`;
    modal.componentInstance.text = `Bạn đang muốn thay đổi nội dung của ${this.TailieuFrom.value.chuong.substring(
      0,
      8
    )} ?`;
    modal.componentInstance.comfirm.subscribe((resp) => {
      if (resp) {
        let id = this.router.snapshot.paramMap.get('id');
        this.docService.update(this.TailieuFrom.value, id).subscribe(
          (res) => {
            if (res) {
              if (res.status == 200) {
                alert('Cập nhật thành công !');
                this.loadService.start();
              }
              console.log(res);
              window.history.back();
              this.loadService.stop();
            }
          },
          (error: HttpErrorResponse) => {
            alert('Tiêu đề chương đã tồn tại. Hãy kiểm tra và thử lại sau !');
          }
        );
      }
    });


}


    console.log(this.TailieuFrom.value);
  }
}
