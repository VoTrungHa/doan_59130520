import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/share/register/register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    this.service.registerAdmin().subscribe((res) => {
      console.log(res);
    });
  }
}
