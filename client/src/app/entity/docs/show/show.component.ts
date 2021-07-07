import { Component, OnInit } from '@angular/core';
import { DocsService } from '../docs.service';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { TailieuService } from '../../tailieu/tailieu.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  Tailieu: any;
  faCheck = faCheck;
  faEdit = faEdit;
  authorities: any;
  Dethi: Array<any> = [];
  DethiUse: Array<any> = [];
  checkLengthAnswerTrue: any;
  typeAnswer: Array<any>;
  formDetailTest: FormGroup;
  CheckChoose: Array<any> = [];
  checkAnserUser: Array<any> = []; // chua taats ca ddois tuong SortAnser
  StorAnser: Array<any> = []; // luu cacs ddaps ans dung
  flagCheckChoose: boolean;
  constructor(
    private docsService: DocsService,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private tailieuService: TailieuService
  ) {
    this.formDetailTest = this.fb.group({
      detailTest: this.fb.array([]),
    });
    let proFile = JSON.parse(localStorage.getItem('listProfiles'));
    this.authorities = proFile.authorities;
    this.getDocsById();
    this.getDethibyClass();
    this.loadAllTrue(1);
  }
  params: any = {
    current_page: 1,
    limit: 5,
    sort: '_id',
    reverse: false,
    search: '',
    theme: '',
    level: '',
  };

  ngOnInit(): void {}

  get detailTest(): FormArray {
    return this.formDetailTest.get('detailTest') as FormArray; // get list answer
  }

  getDocsById() {
    let id = this.router.snapshot.paramMap.get('id');
    this.docsService.getDocsById(id).subscribe(
      (res) => {
        // console.log(res.body.data);
        this.PassDataToForm(res.body.data);
        this.Tailieu = res.body.data;
        this.setTypeAnswer(res.body.data);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  PassDataToForm(data) {
    // console.log(data);

    const controlTest = <FormArray>this.formDetailTest.get('detailTest');
    data.detailTest.map((item, index) => {
      let fg = this.fb.group({
        _id: new FormControl(item._id),
        question: new FormControl(item.question, [Validators.required]),
        answers: this.fb.array([]),
      });
      controlTest.push(fg);
      const ans = <FormArray>controlTest.controls[index * 1].get('answers');
      item.answers.map((ite, index) => {
        let noidung = this.fb.group({
          answer: new FormControl(ite.answer, [Validators.required]),
          bio: new FormControl(false),
        });
        ans.push(noidung);
      });
    });
  }

  checkTrueFalse() {
    this.CheckChoose = [];
    // console.log(this.formDetailTest.value);
    const data = this.formDetailTest.value.detailTest;
    data.map((item, index) => {
      this.flagCheckChoose = true;
      item.answers.map((ans, inde) => {
        if (ans.bio) {
          this.flagCheckChoose = false;
        }
      });
      if (this.flagCheckChoose == true) {
        this.CheckChoose.push(item._id);
      }
    });
    // console.log(this.formDetailTest.value);
    // console.log(this.CheckChoose);
    if (this.CheckChoose.length == 0) {
      // console.log(this.Tailieu);
      // console.log(this.formDetailTest.value.detailTest);
      const data = this.Tailieu.detailTest;
      this.checkAnserUser = [];
      this.Tailieu.detailTest.map((item, index) => {
        this.StorAnser = [];
        item.answers.map((ans, inde) => {
          if (
            data[index].answers[inde].bio &&
            ans.bio &&
            ans.answer == data[index].answers[inde].answer
          ) {
            this.StorAnser.push(true);
          } else {
            this.StorAnser.push(false);
          }
        });
        this.checkAnserUser.push(this.StorAnser);
      });
      // console.log(this.checkAnserUser);
      // console.log(this.formDetailTest.value);
    }
  }
  loadAllTrue(page) {
    // cuộc thi danh cho bạn
    if (page < 0 || !page) {
      page = 1;
    }
    this.tailieuService.loadAllDethi(this.params).subscribe(
      (res) => {
        this.Dethi = res.body.data;
        // console.log(this.Dethi)
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  getDethibyClass() {
    let listProfiles = JSON.parse(localStorage.getItem('listProfiles'));
    if (listProfiles) {
      this.tailieuService.loadDethibyclass(listProfiles._id).subscribe(
        (res) => {
          this.DethiUse = res.body.data;
          // console.log(this.DethiUse);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  setTypeAnswer(data) {
    this.typeAnswer = [];
    data.detailTest.map((nd, inde) => {
      this.checkLengthAnswerTrue = 0;
      nd.answers.map((ans, ind) => {
        if (ans.bio) {
          this.checkLengthAnswerTrue += 1;
        }
      });
      const ans = {
        _id: nd._id,
        length: this.checkLengthAnswerTrue,
      };
      // console.log(ans);
      this.typeAnswer.push(ans);
      // console.log(this.typeAnswer);
      // console.log(this.formDetailTest);
    });
  }
}
