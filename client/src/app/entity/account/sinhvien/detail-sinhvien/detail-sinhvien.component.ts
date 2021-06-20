import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SinhvienService } from '../sinhvien.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-detail-sinhvien',
  templateUrl: './detail-sinhvien.component.html',
  styleUrls: ['./detail-sinhvien.component.scss'],
})
export class DetailSinhvienComponent implements OnInit {
  Sinhvien: any;
  faBan = faBan;
  faEdit = faEdit;
  constructor(
    private router: ActivatedRoute,
    private sinhvienService: SinhvienService,
    private loadUi: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.getSinhVienById();
  }
  onback()
  {
    window.history.back();
  }

  getSinhVienById() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.sinhvienService.getById(id).subscribe(
      (res) => {
        this.loadUi.start();
        this.Sinhvien = res.body.data;
        this.loadUi.stop();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
