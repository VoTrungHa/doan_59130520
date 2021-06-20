import { Component, OnInit } from '@angular/core';
import { faSave, faBan, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SinhvienService } from '../sinhvien.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ShareService } from 'src/app/share/share.service';
import { SERVER_IMAGE } from 'src/app/app.contants';
import {
  FileSystemDirectoryEntry,
  FileSystemFileEntry,
  NgxFileDropEntry,
} from 'ngx-file-drop';
@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.scss'],
})
export class CreatedComponent implements OnInit {
  faSave = faSave;
  faBan = faBan;
  faSyncAlt = faSyncAlt;

  ngay: Array<string> = [];
  thang: Array<string> = [];
  nam: Array<string> = [];

  isLop: boolean = false;
  lop: Array<string> = [];

  isValidator: boolean = false;
  author: string = '';
  roles:string="";

  Sinhvien: any;
  id: string;
  ids: string;

  urlIma: string = '';
  image: boolean = false;
  isFile: boolean = false;

  formAccount: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sinhvienService: SinhvienService,
    private ss: ShareService,
    private loadui: NgxUiLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formAccount = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      Class: new FormControl('', [Validators.required]),
      diachi: new FormControl('', [Validators.required]),
      actived: new FormControl(),
      nganh: new FormControl('', [Validators.required]),
      birthDay: this.fb.group({
        year: new FormControl('', [Validators.required]),
        month: new FormControl('', [Validators.required]),
        day: new FormControl('', [Validators.required]),
      }),
      gender: new FormControl('Nam', [Validators.required]),
      authorities: new FormControl('', [Validators.required]),
    });
  }
  path: string = ''; // phân biệt admin thay đoi hay người dùng thay doi
  ngOnInit(): void {
    this.author = this.route.snapshot.url[1].path;
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    this.roles = profile.authorities;

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.setValueForForm(id);
    }
    let path = this.route.snapshot.url;
    console.log(path);
    if (path.length == 4) {
      this.path = path[2].path;
    }
    this.createDate();
    this.getAllLop();
  }

  setValueForForm(id) {
    this.loadui.start();
    this.image = true;
    this.sinhvienService.getById(id).subscribe(
      (res) => {
        const Sinhvien = res.body.data;
        this.ids = Sinhvien.infor.id;
        this.id = Sinhvien._id;
        console.log(Sinhvien);
        if (Sinhvien.infor.avatar != '') {
          this.urlIma = SERVER_IMAGE + Sinhvien.infor.avatar;
        }

        console.log(this.urlIma);
        this.formAccount.get('avatar').setValue(Sinhvien.infor.avatar);
        this.formAccount.get('firstName').setValue(Sinhvien.infor.firstName);
        this.formAccount.get('lastName').setValue(Sinhvien.infor.lastName);
        this.formAccount.get('login').setValue(Sinhvien.infor.email);
        this.formAccount.get('phone').setValue(Sinhvien.infor.phone);
        this.formAccount.get('gender').setValue(Sinhvien.infor.gender);
        this.formAccount.get('Class').setValue(Sinhvien.infor.Class[0].name);
        this.formAccount.get('diachi').setValue(Sinhvien.infor.diachi);
        this.formAccount.get('nganh').setValue(Sinhvien.infor.nganh);
        this.formAccount.get('password').setValue(Sinhvien.password);
        this.formAccount.get('actived').setValue(Sinhvien.actived);
        this.formAccount.get('authorities').setValue(Sinhvien.authorities);
        let date = Sinhvien.infor.birthDay.split('/');
        this.formAccount.get('birthDay').get('year').setValue(date[0]);
        this.formAccount.get('birthDay').get('month').setValue(date[1]);
        this.formAccount.get('birthDay').get('day').setValue(date[2]);
        this.loadui.stop();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  get actived() {
    return this.formAccount.get('actived');
  }
  get diachi() {
    return this.formAccount.get('diachi');
  }
  get nganh() {
    return this.formAccount.get('nganh');
  }
  get firstName() {
    return this.formAccount.get('firstName');
  }
  get Class() {
    return this.formAccount.get('Class');
  }
  get phone() {
    return this.formAccount.get('phone');
  }
  get lastName() {
    return this.formAccount.get('lastName');
  }
  get login() {
    return this.formAccount.get('login');
  }
  get password() {
    return this.formAccount.get('password');
  }
  get birthDay() {
    return this.formAccount.get('birthDay');
  }
  get gender() {
    return this.formAccount.get('gender');
  }
  get authorities() {
    return this.formAccount.get('authorities');
  }

  getAllLop() {
    this.ss.getAll().subscribe(
      (data) => {
        this.lop = data.body.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);
      }
    );
  }
  createLop(e) {
    this.ss.createLop(e).subscribe(
      (res) => {
        console.log(res.status);
        this.getAllLop();
        this.isLop = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);
      }
    );
  }
  createDate() {
    for (let i = 1; i <= 31; i++) {
      this.ngay.push(`${i}`);
    }
    for (let i = 1; i <= 12; i++) {
      this.thang.push(`${i}`);
    }
    for (let i = 2021; i >= 1890; i--) {
      this.nam.push(`${i}`);
    }
  }

  edit() {
    const data = this.formAccount.value;
    data.id = this.ids;
     const proflile = JSON.parse(localStorage.getItem('listProfiles'));
     this.formAccount.value.createBy = `${proflile.infor.firstName} ${proflile.infor.lastName}`;
     this.formAccount.value.idCreateBy = proflile._id;

    this.sinhvienService.update(this.formAccount.value, this.id).subscribe(
      (res) => {
        if (res.status == 200) {
          alert('Cập nhật thành công');
          this.loadui.start();
          this.loadui.stop();
          window.history.back();
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  created() {
    const proflile=JSON.parse(localStorage.getItem("listProfiles"));
    this.formAccount.value.createBy=`${proflile.infor.firstName} ${proflile.infor.lastName}`;
    this.formAccount.value.idCreateBy=proflile._id;
    this.sinhvienService.create(this.formAccount.value).subscribe(
      (res) => {
        if (res.status == 200) {
          alert(`Tạo tài khoản thành công`);
          this.loadui.start();
          this.loadui.stop();
          window.history.back();
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status == 400) {
          alert(`Email đã tồn tại !`);
        }
      }
    );
  }

  setValidator() {
    this.isValidator = true;
  }
  public fileOver(event) {}
  closeImage() {
    this.urlIma = '';
    this.formAccount.get('avatar').setValue('');
  }
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
                this.formAccount.get('avatar').setValue(file.name);
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
