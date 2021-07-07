import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyhomeService } from '../../myhome.service';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-myhomesinhvien',
  templateUrl: './myhomesinhvien.component.html',
  styleUrls: ['./myhomesinhvien.component.scss'],
})
export class MyhomesinhvienComponent implements OnInit {
  sinhviens: any;
  faTrophy = faTrophy;
  deThi: any;
  Tend: any;
  Tstart: any;
  Tnow: any;
  params: any = {
    current_page: 1,
    limit: 10,
    sort: '_id',
    reverse: false,
    search: '',
    Class: '',
  };
  total_records;
  start = 0;
  end = 10;
  constructor(
    private route: ActivatedRoute,
    private myhomeService: MyhomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.route.parent.url.subscribe((urlPath) => {
      const url = urlPath[urlPath.length - 1].path;
      this.myhomeService.getDeThiDetailById(url).subscribe(
        (res) => {
          // console.log(res);
          this.sinhviens = res.body.sinhvien;
          this.deThi = res.body.data;
          // console.log(this.sinhviens);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    });
  }
  settime() {
    const dateS = this.deThi.timeStart.split(',');
    const ngayStart = dateS[0];
    const timeStart = dateS[1];
    const date = new Date();
    const dateE = this.deThi.timeEnd.split(',');
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
  SeeArchiverment(mssv) {
    //  console.log(mssv);
    this.settime();
    if (this.Tnow < this.Tend) {
      // kiểm tra thời gian đã kết thúc chưa
      alert('Kết quả sẽ hiện thị khi cuộc thi đã kết thúc !');
    } else {
      const profile = JSON.parse(localStorage.getItem('listProfiles'));
      this.route.parent.url.subscribe((urlPath) => {
        const url = urlPath[urlPath.length - 1].path;
        if (profile.authorities != 'SV') {
          this.router.navigate(['/nhacuatoi/thanhtich', mssv], {
            queryParams: { dethi: url },
            // queryParamsHandling: 'merge',
          });
        } else {
          if (profile._id != mssv) {
            alert(
              'Bạn không được phép xem kết quả bài thi của người khác. Hãy liên hệ với quản trị !'
            );
          } else {
            this.router.navigate(['/nhacuatoi/thanhtich', profile._id], {
              queryParams: { dethi: url },
              // queryParamsHandling: 'merge',
            });
          }
        }
      });
    }
  }
}
