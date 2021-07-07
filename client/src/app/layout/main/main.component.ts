import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ImgLoading = '../../assets/Images/icon-loading.svg';
  isNav: boolean = false;
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    this.setlang();
  }

  setlang() {
    // use for translate
    this.translate.setDefaultLang('vi');
    let lang = localStorage.getItem('lang');
    if (lang) {
      this.translate.use(lang);
    }
  }
  setNav() {
    this.isNav = !this.isNav;
    //  console.log(this.isNav);
  }
}
