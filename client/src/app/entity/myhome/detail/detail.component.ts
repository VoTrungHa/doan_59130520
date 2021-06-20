import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { MyhomeService } from '../myhome.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputpasswordComponent } from 'src/app/share/inputpassword/inputpassword.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  faPlay = faPlay;
  Dethi: any;
  ngayStart: string;
  ngayEnd: string;
  timeStart: string;
  timeEnd: string;
  ngay: any;
  gio: any;
  phut: any;
  giay: any;

  lengSv: any;
  lengQuesion: any;

  Tstart: any;
  Tend: any;
  Tnow: any;

  bailam: any = {
    Class: '',
    performer: '',
    idDeThi: '',
    kyThi: '',
    timeStart: '',
    timeEnd: '',
    maDeThi: '',
    idPerformer: '',
    content: '',
    status: Boolean,
    avatar: '',
    createBy:'',
    nameCreateBy:'',
  };

  constructor(
    private route: ActivatedRoute,
    private myhomeService: MyhomeService,
    private router: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadAll();
    this.TimeAuto();
  }
  loadAll() {
    let id = this.route.snapshot.paramMap.get('id');

    this.myhomeService.getDeThiDetailById(id).subscribe(
      (res) => {
        console.log(res);
        this.Dethi = res.body.data;
        this.lengSv = res.body.sinhvien.length;
        this.lengQuesion = res.body.data.detailTest.length;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  TimeAuto() {
    setInterval(() => {
      this.settime();
      const dateS = this.Dethi.timeStart.split(',');
      const dateE = this.Dethi.timeEnd.split(',');
      this.ngayStart = dateS[0];
      this.ngayEnd = dateE[0];
      this.timeStart = dateS[1];
      this.timeEnd = dateE[1];
      const date = new Date();
      date.setFullYear(
        dateS[0].split('-')[2],
        dateS[0].split('-')[1] - 1,
        dateS[0].split('-')[0]
      );
      date.setHours(dateS[1].split(':')[0], dateS[1].split(':')[1], 0);
      const dateN = new Date();
      const second = date.getTime() - dateN.getTime();
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
  settime() {
    const dateS = this.Dethi.timeStart.split(',');
    const ngayStart = dateS[0];
    const timeStart = dateS[1];
    const date = new Date();
    const dateE = this.Dethi.timeEnd.split(',');
    const ngayEnd = dateE[0];
    const timeEnd = dateE[1];
    const datend = new Date();
    date.setFullYear(
      ngayStart.split('-')[2],
      ngayStart.split('-')[1] - 1,
      ngayStart.split('-')[0]
    );
    date.setHours(timeStart.split(':')[0], timeStart.split(':')[1], 0);

    datend.setFullYear(
      ngayEnd.split('-')[2],
      ngayEnd.split('-')[1] - 1,
      ngayEnd.split('-')[0]
    );
    datend.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);
    this.Tend = datend.getTime();
    this.Tstart = date.getTime();
    const dateN = new Date();
    this.Tnow = dateN.getTime();
  }
  // [routerLink]="['/thi',Dethi._id]"
  createBaiLam() {
    this.settime();
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    const data = {
      id: this.Dethi._id,
      idPerformer: profile._id,
    };
    this.myhomeService.getDeThiDetailByIdandPerformer(data).subscribe(
      (res) => {
        if (res.body.data.status == true) {
          alert('Bạn đã hoàn thành đề thi!');
        } else {
          if (this.Tend < this.Tnow) {
            alert('Cuộc thi đã kết thúc.');
            return;
          } else if (this.Tstart > this.Tnow) {
            alert('Cuộc thi chưa bắt đầu.');
            return;
          } else {
            const md = this.modal.open(InputpasswordComponent, {
              size: 'md',
              centered: true,
            });
            md.componentInstance.title = 'Bắt đầu cuộc thi';
            md.componentInstance.text = 'Mật khẩu:';
            md.componentInstance.password.subscribe((res) => {
              if (res === this.Dethi.password) {
                let proFiles = JSON.parse(localStorage.getItem('listProfiles'));
                let firstName = proFiles.infor.firstName;
                let lastName = proFiles.infor.lastName;
                let template = '_1_ _2_';
                var fullName = template
                  .replace('_1_', firstName)
                  .replace('_2_', lastName);
                if (fullName == 'Không có') {
                  alert(
                    'Bạn cần cập nhật thông tin cá nhân đầy đủ cho tài khoản này.'
                  );
                  this.router.navigate(['/thanhvien/thaydoi', proFiles._id]);
                } else {
                  console.log(this.Dethi);
                  this.bailam.performer = fullName;
                  this.bailam.Class = this.Dethi.Class[0].name;
                  this.bailam.idDeThi = this.Dethi._id;
                  this.bailam.kyThi = this.Dethi.kyThi;
                  this.bailam.timeStart = this.Dethi.timeStart;
                  this.bailam.timeEnd = this.Dethi.timeEnd;
                  this.bailam.maDeThi = this.Dethi.id;
                  this.bailam.avatar = this.Dethi.avatar;
                  this.bailam.content = this.Dethi.content;
                  this.bailam.detailTest = this.Dethi.detailTest;
                  this.bailam.idPerformer = proFiles._id;
                  this.bailam.createBy = this.Dethi.createBy.id;
                  this.bailam.status = false;
                  this.bailam.nameCreateBy=this.Dethi.createBy.name;
                  console.log(this.bailam);

                  let profile=JSON.parse(localStorage.getItem("listProfiles"));
                  this.bailam.role=profile.authorities;

                  this.myhomeService.createBaiLam(this.bailam).subscribe(
                    (res) => {
                      console.log(res);
                      this.router.navigate(['/lambai/thi', res.body.data]);
                    },
                    (error: HttpErrorResponse) => {
                      console.log(error);
                    }
                  );
                }
              } else {
                alert('Mật khẩu đề thi không hợp lệ !');
              }
            });
          }
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
