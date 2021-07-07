import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyhomeService } from '../../myhome.service';

@Component({
  selector: 'app-myhomeinfor',
  templateUrl: './myhomeinfor.component.html',
  styleUrls: ['./myhomeinfor.component.scss'],
})
export class MyhomeinforComponent implements OnInit {
  Info: any;
  constructor(
    private route: ActivatedRoute,
    private myhomeService: MyhomeService
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
          this.Info = res.body.data;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    });
  }
}
