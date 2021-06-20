import { Component, OnInit } from '@angular/core';
import { Baithi } from '../baithi.model';
import {ActivatedRoute}from '@angular/router'
import {BaithiService}from '../baithi.service'
import {faBan,faEdit}from '@fortawesome/free-solid-svg-icons'
import { HttpErrorResponse } from '@angular/common/http';
import {NgbModal}from '@ng-bootstrap/ng-bootstrap';
import {TaobaithiComponent}from '../taobaithi/taobaithi.component'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  Baithi: Baithi;
  faBan = faBan;
  faEdit = faEdit;
  constructor(
    private route: ActivatedRoute,
    private baithiService: BaithiService,
    private modal: NgbModal
  ) {}
  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    let id = this.route.snapshot.paramMap.get('id');
    this.baithiService.getOneById(id).subscribe(
      (res) => {
        this.Baithi = res.body.data;
        console.log(this.Baithi);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  goToUpdate(data)
  {
    let modal = this.modal.open(TaobaithiComponent,{centered:true,size:"xl",backdrop:'static'});
    modal.componentInstance.data=data;
  }
}
