import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyhomeService } from '../../myhome.service';

@Component({
  selector: 'app-myhomequestion',
  templateUrl: './myhomequestion.component.html',
  styleUrls: ['./myhomequestion.component.scss'],
})
export class MyhomequestionComponent implements OnInit {
  Baithi: any;
  role: string = 'SV';
  constructor(
    private route: ActivatedRoute,
    private myhomeService: MyhomeService
  ) {}

  ngOnInit(): void {
    this.loadAll();
    let profile = JSON.parse(localStorage.getItem('listProfiles'));
    this.role = profile.authorities;
  }
  loadAll() {
    this.route.parent.url.subscribe((urlPath) => {
      const url = urlPath[urlPath.length - 1].path;
      this.myhomeService.getDeThiDetailById(url).subscribe(
        (res) => {
          // console.log(res);
          this.Baithi = res.body.data;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    });
  }
}
