import { AfterContentChecked, Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../core/login/login.service';

import {
  faTimes,
  faTable,
  faSignOutAlt,
  faBell,
  faUserCircle,
  faBars,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from 'src/app/share/login/login.component';
@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent implements OnInit, AfterContentChecked {

  @Output() isnav:EventEmitter<any>=new EventEmitter();

  faBars = faBars;
  faBell = faBell;
  faUser = faUserCircle;
  faTachometerAlt = faTachometerAlt;
  faSignOutAlt = faSignOutAlt;
  faTable = faTable;
  email :string;
  lang: string = 'vi';
  isLogin: Boolean = false;
  isNav:boolean=true;
  _id:string='';
  author:string;
  constructor(
    private modalService: NgbModal,
    private loginService: LoginService
  ) {}
  ngAfterContentChecked(): void {
    this.setInit();
  }
  ngOnInit(): void {}
  open() {
    this.modalService.open(LoginComponent, { centered: true, size: 'sm' });
  }
  setInit() {
    let lang = localStorage.getItem('lang');
    this.lang = lang ? lang : 'vi';
    let profiles = JSON.parse(localStorage.getItem('listProfiles'));

    if (profiles) {
      this._id = profiles._id;
      this.author=profiles.authorities
      this.isLogin = true;
      this.email = profiles.login;
    } else {
      this.isLogin = false;
      this.email = "";
    }
  }
  clickShowNav()
  {
    this.isNav=!this.isNav
    this.isnav.emit();
  }
  changeLang(e) {
    localStorage.setItem('lang', e);
    window.location.reload();
  }
  logout() {
    this.loginService.logout();
  }
}
