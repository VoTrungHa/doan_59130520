import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/share/register/register.service';

@Component({
  selector: 'app-xoaadmin',
  templateUrl: './xoaadmin.component.html',
  styleUrls: ['./xoaadmin.component.scss'],
})
export class XoaadminComponent implements OnInit {
  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    this.service.deleteAdmin().subscribe((res) => {
      console.log(res);
    });
  }
}
