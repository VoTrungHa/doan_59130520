import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faTachometerAlt,
  faHome,
  faUsers,
  faGraduationCap,
  faChalkboardTeacher,
  faQuestion,
  faHistory,
  faTicketAlt,
  faTable,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navleft',
  templateUrl: './navleft.component.html',
  styleUrls: ['./navleft.component.scss'],
})
export class NavleftComponent implements OnInit {
  faTachometerAlt = faTachometerAlt;
  faTable = faTable;
  faFileInvoice = faFileInvoice;
  faHome = faHome;
  faUsers = faUsers;
  faHistory = faHistory;
  faTicketAlt = faTicketAlt;
  faQuestion = faQuestion;
  faGraduationCap = faGraduationCap;
  faChalkboardTeacher = faChalkboardTeacher;
  idblog: any;
  authorities: string = 'SV';
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {}
  ngAfterContentChecked(): void {
    this.loadDate();
  }
  loadDate() {
    this.idblog = this.router.snapshot.paramMap.get('id');
    let data = JSON.parse(localStorage.getItem('listProfiles'));
    if (data) {
      this.authorities = data.authorities;
    }
  }
}
